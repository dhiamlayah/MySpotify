import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const CategoryPlaylist = ({ id, data, nbr }) => {
  let i = id;
  const [playlist, setPlaylist] = useState("");
  const [error, setError] = useState("");
  const [isHovered, setIsHovered] = useState([]);

  const handleMouseEnter = (index) => {
    const prevState = [...isHovered];
    prevState[index] = true;
    setIsHovered(prevState);
  };

  const handleMouseLeave = (index) => {
    const prevState = [...isHovered];
    prevState[index] = false;
    setIsHovered(prevState);
  };

  const getPlaylist = async (id) => {
    if (data !== "") {
      await axios
        .get(`http://localhost:8000/category/${id}`)
        .then((res) => {
          // console.log("playlist :::", res.data);
          if (res.data.errorExist) {
            setError("data not exist yet please repete later ");
          }
          setPlaylist(res.data.data);
        })
        .catch((err) => {
          console.log(
            `there is an errore to get category playlist data of id ::${id}`,
            err
          );
          setError("this data is not valid right now");
        });
    }
  };

  useEffect(() => {
    getPlaylist(id);
  }, [setPlaylist, setError]);

  if (error !== "") {
    return (
      <div className="bg-backColor mx-12 h-32 mt-4 items-center justify-center rounded-xl ">
        <h1 className="text-2xl text-white text-center pt-5 ">{error}</h1>
      </div>
    );
  }
  return (
    <Swiper spaceBetween={20} slidesPerView={4}>
      <div
        className="text-white ml-2 mx-4  bg-navColor grid gap-2 grid-cols-3 grid-rows-3"
        key="amzdamdm"
      >
        {playlist !== "" &&
          playlist.playlists.items.map((item) => {
            if (item === null || playlist.playlists.items.indexOf(item) > nbr) {
              return null;
            }
            i = i + 1;
            let curseur = playlist.playlists.items.indexOf(item);
            return (
              <SwiperSlide key={i}>
                <div
                  className="flex items-center justify-center mt-4 mb-12 bg-backColor ml-4 rounded-xl hover:bg-gray-600 hover:w-full hover:h-full"
                  key={i}
                  onMouseEnter={() => handleMouseEnter(curseur)}
                  onMouseLeave={() => handleMouseLeave(curseur)}
                >
                  <div className="block  mx-4 mb-12 pt-4  h-64 w-52 border-gray-600 items-center justify-center hover:bg-gray-600  	">
                    <img
                      src={item.images[0].url}
                      className="rounded-full "
                      alt={"img" + i}
                    />
                    <div className="  mt-2 text-center ">
                      <Link
                        to={`playlist/${item.id}`}
                        className="mt-2 text-center text-xl "
                       >
                        {isHovered[curseur] === true && (
                          <i className="fa-regular fa-circle-play pr-2 text-lime-300" />
                        )}
                        {item.name}
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

        <SwiperSlide>
          <div
            className="flex items-center justify-center mt-4 mb-12 bg-navColor ml-4 rounded-xl hover:bg-gray-600 hover:w-full hover:h-full"
            key={i + 1}
          >
            <div className="flex  mx-4 mb-12 pt-4  h-64 w-52 border-gray-600 items-center justify-center hover:bg-gray-600 	">
              <h1 className=" text-center text-3xl px-4">SEE ALL</h1>
              <i className="fa-solid fa-eye fa-beat"></i>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default CategoryPlaylist;

//* the error came from india data soo we should creat a new folder contient axios mehtod with all the exception then  call it that mean if we have an error to get data we write 'data is not valid right now repete later'
