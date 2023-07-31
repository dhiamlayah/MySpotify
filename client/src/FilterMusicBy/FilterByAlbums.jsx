import { FilterArtist, FilterMusic } from "../methods/FilterArtist";
import SingleItem from "../utils/SinglItem";

const Albums = ({ musicData }) => {
 if(musicData.albums){ 
  const allMusicsFound = musicData.albums.items;
  console.log(allMusicsFound);

  const artists = FilterArtist(allMusicsFound);
  const newData = FilterMusic(allMusicsFound, artists);

  return (
    <div className="bg-navColor w-full ">
     <div className="">
        <ul role="list" className="block">
          {newData.map((artist) => (
            <div key={artist[0].artists[0].name}>
              <h1 className="p-2 max-w-lg text-2xl font-semibold leading-relaxed text-gray-900 dark:text-white">{artist[0].artists[0].name}</h1>
              <div className="grid grid-cols-2 sm:grid-cols-1 2md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 " >
                {artist.map((song) => (
                  <SingleItem song={song} key={song.id} />
                ))}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );}
  return(
    <div className="pt-44 "> 
          <i className="fa-solid fa-spinner fa-spin-pulse text-gray-600 text-5xl text-center w-full "></i>
    </div>
    )
};

export default Albums;
