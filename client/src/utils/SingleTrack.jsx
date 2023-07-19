import { Link } from "react-router-dom";
import { useState } from "react";
import { InMinut } from "../methods/duration";
const SingleTrack = ({ item, count }) => {
  const [isHovered, setIsHovered] = useState(false);
 
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const album = item.album;
  const artists = item.artists;
  const time = InMinut(item.duration_ms);
  console.log(time);
  console.log(artists);
  return (
    <tr
      key={item.album.id}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      className="flex block  overflow-hidden  border-b border-gray-200 cursor-pointer    hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
    >
      <td className="  whitespace-nowrap p-5 text-xl text-gray-600  overflow-hidden ">
        {!isHovered &&count}
        {isHovered &&    <Link to={`/track/audio-features/${item.id}`}><i class="fa-solid fa-play fa-bounce text-a"></i></Link>}
      </td>
  
 
      <td className="  whitespace-nowrap w-1/3    overflow-hidden	">
        <div className="flex">
          <img
            src={album.images[2].url}
            className="w-12 h-12 my-2"
            alt="albumImg"
          />
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
