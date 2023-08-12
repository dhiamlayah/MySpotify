import { useContext } from "react";
import { AudioListenner } from "../pages/Home";
import { Link } from "react-router-dom";
const SingleFolowPlaylist = ({ playlist }) => {

    const { setUri, setAutoPlay } = useContext(AudioListenner);
    const PlayPlaylist = async () => {
    setUri(playlist.uri);
    setAutoPlay(true);
  };

  if (playlist) {
    return (
      <div className="flex p-2 hover:bg-gray-600">
        {playlist.images.length > 0 && (
          <img
            src={playlist.images[0].url}
            className="w-12 h-12"
            alt="img-playlist"
          />
        )}

        <Link  to={`playlist/${playlist.id}` } className=" px-2 font-bold whitespace-nowrap overflow-hidden   text-ellipsis">
          {playlist.name}
        </Link>
        <i className="fa-regular fa-circle-play pr-2 text-navColor text-4xl font-bold hover:text-lime-300 px-5" onClick={()=>{PlayPlaylist()}}/>
      </div>
    );
  }
  return (
    <i className="fa-solid fa-spinner fa-spin-pulse text-gray-600 text-5xl text-center w-full "></i>
  );
};

export default SingleFolowPlaylist;
