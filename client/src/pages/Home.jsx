import React,{useEffect, useState,createContext} from "react";
import { Outlet } from "react-router-dom";
import axios from 'axios';
import Navbar from "../components/Navbar";
import WebPlayback from "./PlayBack";

export  const AudioListenner = createContext()

const Home = () => {
  const [uri , setUri]=useState("initialiser par user")
  const [autoPlay , setAutoPlay]=useState(false)
  const [accessToken,setAcessToken]=useState(null)
  const [trackNumber,setTrackNumber]=useState(0)

  const getAccessToken = async()=>{
    await axios.get('http://localhost:8000/accessToken').then((res)=>{
       setAcessToken(res.data.access_token)
    }).catch((err)=>{
      console.log('there is an err to get access token',err.response)
    })
  }

  useEffect(()=>{
    getAccessToken()
    // getDevicesId()
  },[setAcessToken])

   
  return (
    <div className="relative w-full h-screen">
      <AudioListenner.Provider value={{uri,setUri,autoPlay,setAutoPlay,trackNumber,setTrackNumber}}>
        <div className="block sm:flex  bg-backColor   ">
          <Navbar />
          <div className=" sm:pl-72 w-full bg-backColor">
           {accessToken && <Outlet />}
          </div>
        
         </div>
         <div className="absolute w-full inset-x-0 bottom-0 sm:fixed z-10	">
          {accessToken &&   <WebPlayback token={accessToken} />}
        </div>
      </AudioListenner.Provider>
    </div>

  );
};

export default Home;
