import "../css/bg.css";
 
import SingleTrack from "../utils/SingleTrack";
const SinglePlaylist = ({ data }) => {
  let count = 0;
  console.log("thiiis is the fulll data", data);
  if (data !== []) {
    let playlist = data.data;
    return (
      <div className="ml-2 w-full h-full rounded-full p-5 ">
        <div className="bgColor pt-12">
          <div className="sm:h-1/3 flex">
            <img
              src={playlist.images[0].url}
              className="w-64 h-64  ml-12 mt-12"
              alt=""
            />
            <div className="block  mt-12 mx-4">
              <p className="text-8xl decoration-double  font-bold decoration-2  mt-12">
                {playlist.name}
              </p>
              <h1 className="text-white text-lg pt-4 font-medium">
                {playlist.description}
              </h1>
              <h1 className="text-white text-lg font-medium pt-2 pl-5">
                {playlist.followers.total} followers ,{playlist.tracks.total}{" "}
                songs
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-navColor h-full w-full rounded-3xl ">
           
            <table className="   text-white text-sm text-left  mt-5 shadow-sm w-full overflow-hidden  ">
              <thead className=" font-medium  overflow-hidden w-full   ">
                <tr >
                  <th className="py-3 px-6 bg-a ">Top Iteam For The Last Month</th>
                   <th className="  "></th>
                   <th className=""></th>
                </tr>
              </thead>
              {playlist.tracks.items.map((item) => {
                count += 1;
                console.log(item);
                const track = item.track;
                return (
                  <tbody >
                    <SingleTrack count={count} item={track} />
                  </tbody>
                );
              })}
            </table>
        </div>
        </div>
   
    );
  }

  return null;
};

export default SinglePlaylist;