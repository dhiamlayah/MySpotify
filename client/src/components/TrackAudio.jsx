import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
               {audio && <audio src={audio} controls muted preload="auto" ></audio>}
            <h1>test</h1>
        </div>
    );}
    return null
}
 
export default TrackAudio;