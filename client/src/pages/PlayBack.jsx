import { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useContext } from "react";
import { AudioListenner } from "./Home";
function WebPlayback({ token }) {
  
   
  const {uri,autoPlay,trackNumber} = useContext(AudioListenner)
  console.log('trackNumber',trackNumber)
  console.log('uri from playbck',uri)
  return (
    <div>
      <SpotifyPlayer
        token={token}
        uris={[uri]}
        play={true}
        magnifySliderOnHover={true}
        persistDeviceSelection ={true}
        styles={{
          bgColor: "#0c0a09",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#1cb954",
          savedColor: "#333",
          trackArtistColor: "#333",
          trackNameColor: "#333",
        }}
      />
    </div>
  );
}

export default WebPlayback;
