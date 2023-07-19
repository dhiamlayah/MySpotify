import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Genres from "./components/Genres";
import Profil from "./pages/Profil";
import Categorys from "./components/Categorys";
import Playlist from "./pages/Playlist";
import TrackAudio from "./components/TrackAudio";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:code?:state?" element={<Login />} />
        <Route  path="/home" element={<Home />}>
          <Route path="" element={<Categorys />} />
          <Route path="search" element={<Search />} />
          <Route path="profil" element={<Profil />} />
        </Route>
        <Route path="/playlist/:id" element={<Playlist/>}/>
        <Route path="/track/audio-features/:id" element={<TrackAudio/>}/>
      </Routes>
    </Router>
  );
};

export default App;
