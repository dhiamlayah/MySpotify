import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Login = () => {
    // how you get data from url 
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });

  const getAuthorization = async () => {
    try {
      await axios.get("http://localhost:8000/login").then((res) => {
        console.log(res.data.url);
        const url = res.data.url;
        window.location.href = url;
      });
    } catch (err) {
      console.log("ther is an err ::", err);
    }
  };
 
  const parametersForAccessTocken = async () => {
    await axios.post("http://localhost:8000/callback",{
        state: params.state || null,
        code: params.code || null,
    }).then((res)=>{
        console.log('the response is ',res)
    }) 
 };
 
  useEffect(() => {
     parametersForAccessTocken()
  },[params]);


  return (
    <div>
      <button onClick={getAuthorization}>Log with Spotify </button>
    </div>
  );
};

export default Login;
