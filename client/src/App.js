import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profil from "./pages/Profil";
import Categorys from "./components/Categorys";
import Playlist from "./pages/Playlist";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:code?:state?" element={<Login />} />
        <Route path="/home" element={<Home />}>
          <Route path="" element={<Categorys />} />
          <Route path="search" element={<Search />} />
          <Route path="profil" element={<Profil />} />
          <Route path="playlist/:id" element={<Playlist />} />
          <Route path="*" element={<NotFound />} />

        </Route>
        <Route path="/*" element={<NotFound/>} />

      </Routes>
    </Router>
  );
};

export default App;
