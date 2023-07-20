import React,{useEffect, useState} from "react";
import { Outlet } from "react-router-dom";
import axios from 'axios';
import Navbar from "../components/Navbar";
const Home = () => {
  const [accessToken,setAcessToken]=useState(null)
  const getAccessToken = async()=>{
    await axios.get('http://localhost:8000/accessToken').then((res)=>{
       setAcessToken(res.data.access_token)
    }).catch((err)=>{
      console.log('there is an err to get access token',err.response)
    })
  }


  useEffect(()=>{
    getAccessToken()
  },[setAcessToken])

   
  console.log('accessToken ---------------->------------->>',accessToken)
  return (
    <div className="block sm:flex  bg-backColor   ">
      <Navbar />
      <div className=" sm:pl-72 w-full bg-backColor">
       {accessToken && <Outlet />}
      </div>
    </div>
  );
};

export default Home;
