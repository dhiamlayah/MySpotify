import axios from "axios";
import { useEffect, useState } from "react";
import SingleFolowPlaylist from "./SingleFolowPlaylist";

const FolowPlaylist = () => {
  const [folowPlaylist, setFolowPlaylist] = useState(null);

  const getFolowPlaylist = async () => {
    await axios
      .get("http://localhost:8000/folowPlaylist")
      .then((res) => {
        console.log("Folow Playlist fe ", res.data);
        setFolowPlaylist(res.data);
      })
      .catch((err) => {
        console.log("there is an error to get folow playlist ");
      });
  };
  useEffect(() => {
    getFolowPlaylist();
  }, [folowPlaylist]);

  if (folowPlaylist) {
    const playlists = folowPlaylist.items;
    return (
      <div className=" h-full overflow-auto">
        {playlists.map((playlist) => {
          return <SingleFolowPlaylist playlist={playlist} key={playlist.id} />;
        })}
      </div>
    );
  }
  return (
    <div className="pt-44 ">
      <i className="fa-solid fa-spinner fa-spin-pulse text-gray-600 text-5xl text-center w-full "></i>
    </div>
  );
};

export default FolowPlaylist;
 