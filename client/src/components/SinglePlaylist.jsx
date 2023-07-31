import "../css/bg.css";
import { useContext } from "react";
import SingleTrack from "../utils/SingleTrack";

import { AudioListenner } from "../pages/Home";
const SinglePlaylist = ({ data }) => {
  const { setUri, setAutoPlay } = useContext(AudioListenner);
  const PlayPlaylist = async () => {
    setUri(data.data.uri);
    setAutoPlay(true);
  };

  let count = 0;

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

          <div className="p-5 ml-8 flex ">
            <i
              className="fa-solid fa-circle-play text-5xl hover:cursor-pointer"
              onClick={() => {
                PlayPlaylist();
              }}
            ></i>{" "}
            <h1
              className="text-2xl text-center p-2 hover:cursor-pointer"
              onClick={() => {
                PlayPlaylist();
              }}
            >
              start now
            </h1>
          </div>
        </div>

        <div className="bg-navColor h-full w-full rounded-3xl mb-32 ">
          <table className="   text-white text-sm text-left  mt-5 shadow-sm w-full overflow-hidden  ">
            <thead className=" font-medium  overflow-hidden w-full   ">
              <tr>
                <th className="py-3 px-6 bg-a ">
                  Top Iteam For The Last Month
                </th>
                <th className="  "></th>
                <th className=""></th>
              </tr>
            </thead>
            <tbody>
              {playlist.tracks.items.map((item) => {
                count += 1;
                const track = item.track;
                return (
                  <SingleTrack
                    count={count}
                    item={track}
                    uri={playlist.uri}
                    key={track.album.id}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-44 ">
      <i className="fa-solid fa-spinner fa-spin-pulse text-gray-600 text-5xl text-center w-full "></i>
    </div>
  );
};

export default SinglePlaylist;
