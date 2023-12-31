import { Link } from "react-router-dom";
import { useState,useContext } from "react";
import { InMinut } from "../methods/duration";
import { AudioListenner } from "../pages/Home";
const SingleTrack = ({ item, count,uri }) => {
  const [isHovered, setIsHovered] = useState(false);
  const {setTrackNumber,setUri} = useContext(AudioListenner)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const playTrack = ()=>{
      console.log('!!!!!!!',uri) 
      setUri(item.uri)
  }

  const album = item.album;
  const artists = item.artists;
  const time = InMinut(item.duration_ms);

  return (
    <tr
      key={item.album.id}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      className="flex block  overflow-hidden  border-b border-gray-200 cursor-pointer    hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
    >
      <td className="  whitespace-nowrap p-5 text-xl text-gray-600  overflow-hidden ">
        {!isHovered &&count}
        {isHovered &&    <i className="fa-solid fa-play fa-bounce text-a" onClick={()=>playTrack()}></i>}
      </td>
  
 
      <td className="  whitespace-nowrap w-1/3    overflow-hidden	">
        <div className="flex">
        {album.images>0  &&  <img
            src={album.images[2].url}
            className="w-12 h-12 my-2"
            alt="albumImg"
          />}
          <div className="block w-full overflow-hidden  ">
            <h1 className="text-xl pl-2 p-1  w-64 whitespace-nowrap overflow-hidden   text-ellipsis">
              {item.name}
            </h1>
            <div className="text-xs px-4 w-64 flex whitespace-nowrap overflow-hidden text-ellipsis ">
              {artists.map((artist) => {
                return (
                  <Link to={`/artist/${artist.name}`} key={artist.id}>
                    _{artist.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </td>
      <td className=" sm:pl-12  whitespace-nowrap  w-1/3	pt-5  overflow-hidden  ">
        <div className="whitespace-nowrap overflow-hidden text-ellipsis   w-64">
          <Link to={album.href}>{album.name}</Link>
        </div>
      </td>
      <td className="whitespace-nowrap   pt-5  overflow-hidden">
        <div className="sm:pl-12">
          <h1>
            {time.s < 10 ? time.min + ":0" + time.s : time.min + ":" + time.s}
          </h1>
        </div>
      </td>
    </tr>
  );
};

export default SingleTrack;
