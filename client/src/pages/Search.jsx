import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Album from "../FilterMusicBy/FilterByAlbums";
import Artist from "../FilterMusicBy/FilterByArtist";
import axios from "axios";
import Playlist from "../FilterMusicBy/FilterByPlaylist";
import Track from "../FilterMusicBy/FilterByTrack";

const Search = () => {
  // console.log(musics)
  const [musicFound, setMusicFound] = useState(null);
  const [searchBy, setSearchBy] = useState(
    "album%2Cartist%2Ctrack%2Cplaylist%2Cshow%2Cepisode%2Caudiobook"
  );

  //* we post this search data to backend
  const [musicSearch, setMusicSearch] = useState("");
  const getSearchMusic = (e) => {
    setMusicSearch(e.target.value);
  };

  const getMusicFromSpotify = async () => {
    await axios
      .get(`http://localhost:8000/search/name=${musicSearch}/type=${searchBy}`)
      .then((res) => {
        console.log("data searcherd", res.data);
        setMusicFound(res.data.data);
      })
      .catch((err) => {
        console.log("there is an err to get search FE", err.response);
      });
  };

  console.log("music===========>", musicFound);
  useEffect(() => {
    getMusicFromSpotify();
    console.log(musicSearch);
  }, [musicSearch, searchBy]);

  return (
    <div className=" w-full h-full pl-3">
      <SearchBar
        onSearchMusic={getSearchMusic}
        musicSearch={musicSearch}
        setSearchBy={setSearchBy}
      />
      {musicFound==='' && <div><i className="fa-solid fa-magnifying-glass fa-beat-fade bg-gray-600 text-4xl "></i> </div>}
      {searchBy ===
        "album%2Cartist%2Ctrack%2Cplaylist%2Cshow%2Cepisode%2Caudiobook" && (
        <h1 className="text-white">search by All</h1>
      )}
      {searchBy === "artist" && <Artist musicFound={musicFound}/>}
      {searchBy === "album" && <Album musicData={musicFound} />}
      {searchBy === "playlist" && <Playlist musicData={musicFound} />}
      {searchBy === "track" && <Track musicData={musicFound} />}


     </div>
  );
};

export default Search;
