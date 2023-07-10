import React, { useEffect } from "react";
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
    if (!params.state && !params.code ){
      return null
    }
    await axios.post("http://localhost:8000/callback",{
        state: params.state || null,
        code: params.code || null,
    }).then(()=>{
      window.location.href= 'http://localhost:3000/home'
    }) 
 };
 
  useEffect(() => {
     parametersForAccessTocken()
  },[params.state]);


  return (
    <div className="flex items-center bg-white">
      <img src="/images/music1.jpg" alt=""  className="w-96 h-screen"/>
      <div className="border-l-2 border-gray-500 h-32 ml-32"></div>
      <div className="pl-2">
        <h1 className="text-6xl p-2	">To start MySpotify  </h1>
        <h2 className="text-2xl p-2">please Log with your spotify account</h2>
        <button onClick={getAuthorization} className="h-12 m-2  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><i className="fa-brands fa-spotify"></i> Log with Spotify </button>
      </div>
    </div>
  );
};

export default Login;
