import Albums from "./FilterByAlbums";
import Artist from "./FilterByArtist";
import Playlist from "./FilterByPlaylist";

const All = ({ musicFound }) => {
  console.log("music Found in all ", musicFound);
  if (musicFound) {
    return (
      <div>
        <p className="font-bold text-4xl text-white bg-navColor p-5">PLAYLIST :</p>
        <Playlist musicData={musicFound} />
        <p className="font-bold text-4xl text-white bg-navColor p-5">ARTIST :</p>
       
       <Artist musicFound={musicFound} />
        <p className="font-bold text-4xl text-white bg-navColor p-5">ALBUM :</p>

       
        <Albums musicData={musicFound} />
      
      </div>
    );
  }

  return (
    <div className="pt-44 ">
      <i className="fa-solid fa-spinner fa-spin-pulse text-gray-600 text-5xl text-center w-full "></i>
    </div>
  );
};

export default All;
