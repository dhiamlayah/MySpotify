import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div className="block sm:flex  bg-backColor   ">
      <Navbar />
      <div className=" sm:pl-72 w-full bg-backColor">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
