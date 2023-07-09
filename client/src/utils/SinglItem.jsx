const SingleItem = ({song}) => {
    return (
    
        <div className=" p-4 bg-backColor rounded-xl  m-5 w-40" key={song.name}>
        <div>
            <img className="rounded-full w-32 h-32" src={song.images[1].url} alt="" />
        </div>
        <hr className="w-32 mt-6 	"></hr>
        <div className="  text-white  ">
            <h3 className="w-32 h-10 text-center text-sm font-semibold">{song.name}</h3>
            <h3 className="w-32 p-1 text-left text-sm font-semibold">{song.release_date}</h3>
        </div>
        </div>


      );
}
 
export default SingleItem;