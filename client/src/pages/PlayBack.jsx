import { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

function WebPlayback({ token }) {
  const [uri,setUri]=useState(localStorage.getItem('uri'))
  const  [i,setI]=useState(0)
 useEffect(()=>{
      setUri(localStorage.uri)
  },[setUri])
    console.log('render',uri)
  return (
    <div>
       <h1 className="text-white text-5xl">the usi is :{uri}</h1> 
      {/* <SpotifyPlayer
        token={token}
        uris={[uri]}
        styles={{
          bgColor: "#0c0a09",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#1cb954",
          savedColor: "#333",
          trackArtistColor: "#333",
          trackNameColor: "#333",
        }} */}
      {/* /> */}
    </div>
  );
}

export default WebPlayback;
