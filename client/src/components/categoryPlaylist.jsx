import { useState, useEffect } from "react";
import axios from "axios";
const CategoryPlaylist = ({ id, data ,nbr }) => {
  let i=id
  const [playlist, setPlaylist] = useState("");
  const [error, setError] = useState("");

  const getPlaylist = async (id) => {
    if (data !== "") {
      await axios
        .get(`http://localhost:8000/category/${id}`)
        .then((res) => {
          console.log("playlist :::", res.data);
          setPlaylist(res.data);
        })
        .catch((err) => {
          console.log("there is an errore to get playlist data", err);
          setError('this data is not valid now')
        });
    }
  };
  useEffect(() => {
    getPlaylist(id);
   }, [setPlaylist,setError]);

  console.log("p22---------->", playlist);
  console.log("E22---------->", error);

   if(error !== ""){
    return <h1>{error}</h1>
   }
  return (
    <div className="text-white ml-2  bg-navColor h-screen" >
      <h1>test</h1>
      {playlist !== "" &&
        playlist.playlists.items.map((item) => {
          if(item===null || playlist.playlists.items.indexOf(item)>nbr){
            return null
          }
          i=i+1
          return (
            <div className="flex" key={i}>
                  <img src={item.images[0].url} className="w-32 h-32" alt={"img"+ i} />
                <div  >
                {item.name &&  <h1>{item.name}</h1>}
                  {/* <p className="text-sm">{item.description}</p> */}
                </div>
            </div>
          );
        })}       
    </div>
  );


};

export default CategoryPlaylist;



//* the error came from india data soo we should creat a new folder contient axios mehtod with all the exception then  call it that mean if we have an error to get data we write 'data is not valid right now repete later'
