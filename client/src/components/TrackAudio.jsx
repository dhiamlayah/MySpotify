import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpotifyPlayer from "react-spotify-web-playback";
import axios from "axios";
const TrackAudio = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const getData = async () => {
    await axios
      .get(`http://localhost:8000/track/audio-features/${params.id}`)
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, [setData]);
  if (data.length !== 0) {
    console.log("data", data);
    const audio = data.data.analysis_url;
    console.log(audio);
    return (
      <div className="bg-white">
        <iframe
          src="https://open.spotify.com/embed/album/1MuXKQqzUGBvATkE02DyNI?utm_source=generator"
          width="100%"
          height="152"
          allow={
            "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          }
          loading="lazy"
        ></iframe>{" "}
        <h1>test</h1>
      </div>
    );
  }
  return null;
};

export default TrackAudio;
