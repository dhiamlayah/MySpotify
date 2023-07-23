import React,{useEffect, useState} from "react";
import { Outlet } from "react-router-dom";
import axios from 'axios';
import Navbar from "../components/Navbar";
import WebPlayback from "./PlayBack";
const Home = () => {
  const [accessToken,setAcessToken]=useState(null)
  const getAccessToken = async()=>{
    await axios.get('http://localhost:8000/accessToken').then((res)=>{
       setAcessToken(res.data.access_token)
    }).catch((err)=>{
      console.log('there is an err to get access token',err.response)
    })
  }

  const getDevicesId =async()=>{
    await axios.get('http://localhost:8000/play').then((res)=>{
      console.log('the response from the backend for divice id ',res.data)
    }).catch((err)=>{
      console.log('ther is an err to get divice id ',err.response)
    })
  }

// getDevicesId()

  useEffect(()=>{
    getAccessToken()
    // getDevicesId()
  },[Storage])

   
  return (
    <div className="relative w-full h-screen">
      <div className="block sm:flex  bg-backColor   ">
        <Navbar />
        <div className=" sm:pl-72 w-full bg-backColor">
         {accessToken && <Outlet />}
        </div>
      
       </div>
       <div className="absolute w-full inset-x-0 bottom-0 sm:fixed z-10	">
        {accessToken &&   <WebPlayback token={accessToken} />}
      </div>
    </div>

  );
};

export default Home;
