import { Link } from "react-router-dom";
import { InMinut } from "../methods/duration";
const SingleTrack = ({ item, count }) => {
  const album = item.album;
  const artists = item.artists;
  const time = InMinut(item.duration_ms);
  console.log(time);
  console.log(artists);
  return (
 
     
      <tr key={item.album.id} className="flex block w-full  border-b border-gray-200 cursor-pointer    hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
        <td className="  whitespace-nowrap p-5 text-xl text-gray-600	">
          {count}
        </td>
        <td className="  whitespace-nowrap w-1/3 	">
          <div className="flex">
            <img
              src={album.images[2].url}
              className="w-12 h-12 my-2"
              alt="albumImg"
            />
            <div className="block">
              <h1 className="text-xl pl-2 p-1">{item.name}</h1>
              <div className="text-xs px-4 flex">
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
        <td className=" sm:pl-12  whitespace-nowrap  w-1/3	pt-5  ">
          <div className=" ">
            <Link to={album.href}>{album.name}</Link>
          </div>
        </td>
        <td className="whitespace-nowrap  w-1/3  pt-5">
          <div className="sm:pl-12">
            <h1>{time.s<10?time.min + ":0" +time.s:time.min + ":" + time.s}</h1>
          </div>
        </td>
     </tr>
                  
 
  );
};

export default SingleTrack;
 