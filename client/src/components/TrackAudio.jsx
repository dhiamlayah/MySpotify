import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpotifyPlayer from 'react-spotify-web-playback';
import axios from "axios";
const TrackAudio = () => {
    const params = useParams()
    const [data,setData]=useState([])
    const getData = async()=>{
        await axios.get(`http://localhost:8000/track/audio-features/${params.id}`).then((res)=>{
             setData(res.data)
        })
    }

    useEffect(()=>{
        getData()
    },[setData])
  if(data.length!==0){ 
    console.log("data",data)
    const audio = data.data.analysis_url
    console.log(audio)
     return (  
        <div className="bg-white">
                <audio src="spotify:track:4rXLjWdF2ZZpXCVTfWcshS">ddd</audio>
                <audio src="spotify:track:4rXLjWdF2ZZpXCVTfWcshS" controls muted preload="auto" ></audio> 
               {/* <SpotifyPlayer 
                    token="BQD-5W-gtkxEMg6fj6jNuze1F5MFetNZLfuLqe6V-g53lAqxl91bYzQMl2OeDeJjGvN4OLFJ6nH5EZRvURuJY_a2zpzohb3DZgwDGyOqN_B29tVrRIowM6YBbYjU2aHWohYbcNy7OYODvoqVTy2lMJoDME7onc6ArLFUvyybmwwu5bOIK70hbQwexSZU6ckmlTr5DLkreRY3oU10R-0MRg"
                    uris={['spotify:track:6wf7Yu7cxBSPrRlWeSeK0Q']}
               /> */}
               {/* <iframe  src={`https://open.spotify.com/embed/track/${params.id}?utm_source=generator`} width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
            <h1>test</h1>
            
        </div>
    );}
    return null
}
 
export default TrackAudio;
