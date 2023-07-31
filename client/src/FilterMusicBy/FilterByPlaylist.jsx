 
const Playlist = ({musicData}) => {
    if(musicData.playlists){
        const playlists = musicData.playlists.items
        console.log('data from playlist :::>',musicData.playlists)
        return (
            <div className=" grid gap-4 grid-cols-5  grid-rows-3 content-center bg-navColor pb-44 ">
            {playlists.map((playlist)=>{
                return(
                    <div className="bg-backColor w-44 ml-4 rounded-2xl hover:bg-gray-600 transition duration-300">
                         <img src={playlist.images[0].url}  className='w-44 h-44 p-5' alt="" />   
                         <p className="text-sm text-center font-bold text-white">{playlist.name}</p>
                    </div>
                )
            })} 
            </div>
             );
    
    }
    return(
        <div className="pt-44 "> 
              <i className="fa-solid fa-spinner fa-spin-pulse text-gray-600 text-5xl text-center w-full "></i>
        </div>
        )
}
 
export default Playlist;