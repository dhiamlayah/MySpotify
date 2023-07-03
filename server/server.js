const express = require("express");
const app = express();
const axios = require("axios");
const qs = require("qs");
const querystring = require("querystring");
var cors = require("cors");

app.use(cors());
app.use(express.json());

//*-----------DEPENDENCY----------- */
const client_id = "4f8370a7b1c24948ba5a8514887343df";
const redirect_uri = "http://localhost:3000";
const client_secret = "b3a62665841445baaa756cd269c42744";
const url = "https://accounts.spotify.com/api/token";
var access_token = null;
var refresh_token = null;

//*--------First Step :AUTHORIZATION---------**/
const generateRandomString = function (length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const sendForAccessToken = async (code) => {
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
      .then((res) => {
        console.log("data is ----->", res.data);
        access_token = res.data.access_token;
        refresh_token = res.data.refresh_token;
      });
  } catch (err) {
    console.log("there is an err in requist for access-token", err);
  }
}; 

const getRefreshToken = async (refresh_token) => {
  const values = {
    grant_type: "refresh_token",
    refresh_token ,
  };
  await axios
    .post(url, qs.stringify(values), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => {
      access_token = res.data.access_token;
    })
    .catch((error) => {
      console.log("there is an error in refresh token", error);
    });
};

//-------------authorization------------------//
app.get("/login", (req, res) => {
  var state = generateRandomString(16);
  var scope = "user-read-private user-read-email";
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
app.post("/callback", (req, res) => {
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
});

//----------------post for refresh token -----------------------------------//
app.post("/refreshToken", (req, res) => {
  if (access_token !== null) {
    getRefreshToken(refresh_token)
  }
});

app.get("/album", async (req, res) => {
  await axios
    .get("https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
    });

  console.log(access_token);
});

app.listen(8000, (req, res) => {
  console.log("app listen in port 8000");
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
