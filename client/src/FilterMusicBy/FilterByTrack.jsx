import SingleTrack from "../utils/SingleTrack";
const Track = ({musicData}) => {

    if(musicData.tracks){
        let count = 0
        const tracks = musicData.tracks.items
        console.log('tracks',tracks)
    return (
        <div className="bg-navColor   rounded-xl mt-3 pt-2 pb-44  ">
      <table className="w-full table-auto text-sm text-left  mt-2 shadow-sm   ">
        <thead className="bg-gray-400  font-medium    ">
          <tr>
            <th className="py-3 px-6 ">Tracks Found</th>
            <th className="  "></th>
            <th className=""></th>
          </tr>
        </thead>
        <tbody className="text-gray-600  ">
          {tracks.map((item) => {
            count += 1;
            return (
                <SingleTrack item={item} count={count} key={count}/>
            );
          })}
        </tbody>
      </table>
    </div>
      );
}
return(
    <div className="pt-44 "> 
          <i className="fa-solid fa-spinner fa-spin-pulse text-gray-600 text-5xl text-center w-full "></i>
    </div>
    )
}
 
export default Track;