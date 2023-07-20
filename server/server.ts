const express = require("express");
const app = express();
const axios = require("axios");
const qs = require("qs");
const querystring = require("querystring");
const httpMethod = require("./httpMethods/axiosMethods");
var cors = require("cors");

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded)

//*-----------DEPENDENCY----------- */
const localhost = process.env.localhost;
const client_id = process.env.client_id;
const redirect_uri = process.env.redirect_uri;
const client_secret = process.env.client_secret;
const url = "https://accounts.spotify.com/api/token";

var access_token: string | null = null;
var refresh_token: string | null = null;

//*--------First Step :AUTHORIZATION---------**/
const generateRandomString = (length: number): string => {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const sendForAccessToken = async (code: string): Promise<any> => {
  if (code === null) return null;
  const values = {
    code,
    client_id,
    client_secret,
    grant_type: "authorization_code",
    redirect_uri,
  };
  try {
    await axios
      .post(url, qs.stringify(values), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res: any) => {
        console.log("data is ----->", res.data);
        access_token = res.data.access_token;
        refresh_token = res.data.refresh_token;
      });
  } catch (err) {
    console.log("there is an err in requist for access-token", err);
  }
};

const getRefreshToken = async (refresh_token: string | null): Promise<any> => {
  const values = {
    grant_type: "refresh_token",
    refresh_token,
  };
  await axios
    .post(url, qs.stringify(values), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res: any) => {
      access_token = res.data.access_token;
    })
    .catch((error: any) => {
      console.log("there is an error in refresh token", error);
    });
};

//-------------authorization------------------//
app.get("/login", (req: any, res: any) => {
  var state = generateRandomString(16);
  var scope = "user-read-private user-read-playback-state user-read-email";
  res.json({
    url:
      "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      }),
  });
});

//-------------authorization code exchange.to get access token---------------//
app.post("/callback", (req: any, res: any) => {
  console.log(req.body.state);
  var code = req.body.code || null;
  var state = req.body.state || null;
  if (state === null) {
    res.json(
      "/#" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  }
  
  sendForAccessToken(code);
 if(access_token!==null){
  res.json({access_token:access_token});

 }


});

//---------------send access token -----------------------------------------//
app.get('/accessToken',(req:any,res:any)=>{
  if(access_token){
    res.status(200).json({access_token})
  }
  res.state(401).json({error:"your are not autorizate"})
  
})

//----------------post for refresh token -----------------------------------//
app.post("/refreshToken", () => {
  if (access_token !== null) {
    getRefreshToken(refresh_token);
  }
});

app.get("/album", async () => {
  await axios
    .get("https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((res: any) => {
      console.log(res.data);
    });

  console.log(access_token);
});

app.get("/category", async (req: any, res: any) => {
  let data: any;
  await axios
    .get("https://api.spotify.com/v1/browse/categories?country=SE", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((res: any) => {
      console.log(res.data.categories.items);
      data = res.data;
    })
    .catch((err: any) => {
      console.log("there is an error to get category data ", err.response);
    });

  res.json(data);
});

app.get("/category/:categorys", async (req: any, res: any) => {
  let id = req.params.categorys;
  let data: any;
  let errExist = false;
  let getStatus: number = 200;
  let errMessege = `there is an error to get category  playlist data from id:${id} `;
  let localUrl = `https://api.spotify.com/v1/browse/categories/${id}/playlists`;

  await axios
    .get(localUrl, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((res: any) => {
      data = res.data;
      errExist = false;
    })
    .catch((err: any) => {
      console.log(errMessege, err.response);
      errExist = true;
      data = err.response.message;
      getStatus = err.response.status;
    });

  //  const ress = await  httpMethod.axiosGet(access_token,localUrl,errMessege)
  //   console.log('res ------------------->', ress)
  // // console.log("data ==>", data);
  // // console.log("err ==>", errExist);

  if (errExist) {
    res.status(getStatus).json({ errorExist: errExist });
  } else if (data) {
    res.status(200).json({ errorExist: false, data });
  }
});

app.get("/genres", async (req: any, res: any) => {
  let genresData: any;
  await axios
    .get("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((res: any) => {
      genresData = res.data;
      console.log(genresData);
    })
    .catch((err: any) => {
      console.log("there is an error in genres", err);
    });
  res.json(genresData);
});

app.get("/playlist/:id", async (req: any, res: any) => {
  let id = req.params.id;
  let data: any;
  let errExist = false;
  let getStatus: number = 200;

  let errMessege = `there is an error to get playlist data from id:${id} `;
  await axios
    .get(`https://api.spotify.com/v1/playlists/${id}?market=ES`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((res: any) => {
      data = res.data;
      errExist = false;
    })
    .catch((err: any) => {
      console.log(errMessege, err.response);
      errExist = true;
      data = err.response;
      getStatus = err.response.status;
    });

  if (errExist) {
    res.status(getStatus).json({ errorExist: errExist });
  } else if (data) {
    res.status(200).json({ errorExist: false, data });
  }
});

app.get("/track/audio-features/:id", async (req: any, res: any) => {
  let id = req.params.id;
  let data: any;
  let errExist = false;
  let getStatus: number = 200;

  let errMessege = `there is an error to get audio features from track of  id:${id} `;
  await axios
    .get(`https://api.spotify.com/v1/audio-features/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((res: any) => {
      data = res.data;
      errExist = false;
    })
    .catch((err: any) => {
      console.log(errMessege, err.response);
      errExist = true;
      data = err.response;
      getStatus = err.response.status;
    });

  if (errExist) {
    res.status(getStatus).json({ errorExist: errExist });
  } else if (data) {
    res.status(200).json({ errorExist: false, data });
  }
});

app.get("/play", async (req: any, res: any) => {
  await axios
    .get("https://api.spotify.com/v1/me/player", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((res: any) => {
      console.log("player data >>>>>>>>>>>>>>>>>>>+========>>>>>", res.data);
    }).catch((err:any)=>{
      console.log('err ==================>>>>>',err.response)
    });
});

app.listen(localhost, () => {
  console.log("app listen in port :", localhost);
});
/*.

..
.
..
.
.

.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
. */
//*if we want to add local login

// const mongoose = require("mongoose");
// const UserModel = require('./models/Users')

// mongoose.connect(
//     "mongodb+srv://dhiamlayah:jB0DxFVKJYkaiz2R@cluster0.xy6thpg.mongodb.net/MySpotify?retryWrites=true&w=majority"
//   )
//   .then(() => {
//     console.log("connecting with DATABASE successfuly ");
//   })
//   .catch((err) => {
//     console.error("cant connect with DATABASE ", err);
//   });

// app.post("/register", async(req, res) => {
//     const newUser = UserModel(req.body)
//    try{ await newUser.save()}
//    catch(error){
//       console.log(error.message)
//    }
//     res.json(req.body)

//   });

//** try to put axios inside your front end  */
