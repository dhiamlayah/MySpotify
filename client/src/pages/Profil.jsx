import axios from "axios";
import TopTrackUser from "../components/TopTracksUser";
import User from "../components/user";
import { user } from "../fakeData/user";
import { useEffect, useState } from "react";
const Profil = () => {
  const [currnetUser, setCurrentSUser] = useState(null);
  const [topTracks,setTopTracks]=useState(null)
  const getUser = async () => {
    await axios.get("http://localhost:8000/user").then((res) => {
      console.log("user ===+>", res.data);
        setCurrentSUser(res.data.currentUser.data);
    });
  };
  
  const getTopTracks =async ()=>{
      await axios.get("http://localhost:8000/user/topTrack").then((res)=>{
            setTopTracks(res.data)
      }) 
  }

  useEffect(() => {
    getUser();
    getTopTracks()
  }, [setCurrentSUser,setTopTracks]);
  console.log('current user ',currnetUser)
  console.log('TopTracks user ',topTracks)

  if (currnetUser) {
    return (
      <div>
        <User user={currnetUser} />
        <TopTrackUser topTracks={topTracks} />
      </div>
    );
  }
};

export default Profil;
