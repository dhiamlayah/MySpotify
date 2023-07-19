import { TopTrack } from "../fakeData/TopUserTrack";
import SingleTrack from "../utils/SingleTrack";
const TopTrackUser = () => {
  const data = TopTrack.items;
  let count = 0;
  return (
    <div className="bg-navColor  ml-3 rounded-xl mt-3 pt-2 pl-3  ">
      <table className="w-full table-auto text-sm text-left  mt-2 shadow-sm   ">
        <thead className="bg-gray-400  font-medium    ">
          <tr>
            <th className="py-3 px-6 ">Top Iteam For The Last Month</th>
            <th className="  "></th>
            <th className=""></th>
          </tr>
        </thead>
        <tbody className="text-gray-600  ">
          {data.map((item) => {
            count += 1;
            return (
                <SingleTrack item={item} count={count} key={item.album.id}/>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TopTrackUser;
