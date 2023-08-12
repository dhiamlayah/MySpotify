import { TopTrack } from "../fakeData/TopUserTrack";
import SingleTrack from "../utils/SingleTrack";

const TopTrackUser = ({topTracks}) => {
 if(topTracks)
  {
    console.log(topTracks)
  const tracks =topTracks.topItems.data.items
  let count = 0;
  return (
    <div className=" bg-black ml-3   pt-3 pl-3  ">
      <table className="w-full table-auto text-sm text-left  mt-2 shadow-sm   ">
        <thead className="bg-gray-400  font-medium    ">
          <tr>
            <th className="py-3 px-6 ">Top Tracks For The Last Month</th>
            <th className="  "></th>
            <th className=""></th>
          </tr>
        </thead>
        <tbody className="text-gray-600  ">
          {tracks.map((track) => {
            count += 1;
            return (
                <SingleTrack item={track} count={count} key={track.album.id}/>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
return null
};

export default TopTrackUser;
