const Artist = ({ musicFound }) => {
  if (musicFound.artists) {
    const artists = musicFound.artists.items;

    console.log("artists", artists);

    return (
      <div className="grid gap-4 grid-cols-4  grid-rows-3 content-center bg-navColor">
        {artists.map((artist) => {
          if (artist.images.length === 0) {
            return null;
          } else {
            return (
              <div
                key={artist.id}
                className="bg-backColor  rounded-xl w-55 h-64 mx-5 my-3 justify-center hover:bg-gray-600  p-5 transition duration-300 "
              >
                {artist.images.length > 0 && (
                  <img
                    src={artist.images[0].url}
                    className="w-44 h-44 rounded-full relative content-center "
                    alt="artist"
                  />
                )}
                <h1 className="text-white text-center font-bold whitespace-nowrap overflow-hidden   text-ellipsis">{artist.name}</h1>
                <p className='text-gray-600 pr-4 '>{artist.type}</p>
              </div>
            );
          }
        })}
      </div>
    );
  } 
  return(
    <div className="pt-44 "> 
          <i className="fa-solid fa-spinner fa-spin-pulse text-gray-600 text-5xl text-center w-full "></i>
    </div>
    )
};

export default Artist;
