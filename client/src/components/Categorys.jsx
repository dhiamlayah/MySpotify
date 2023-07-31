import { Category } from "../fakeData/Category";
import { useState, useEffect } from "react";
import axios from "axios";
import CategoryPlaylist from "./categoryPlaylist";
const Categorys = () => {
  const [data, setData] = useState([]);
  const [error , setError]= useState('')
  const getCategory = async () => {
    await axios
      .get("http://localhost:8000/category")
      .then((res) => {
        // console.log("data from backend", res.data.categories.items);
        setData(res.data.categories.items);
      })
      .catch((err) => {
        console.log("there is an error in get category ", err);
        setError('there is an error please relode home page')
      });
  };

  useEffect(() => {
    getCategory();
  }, [setData,setError]);

  // console.log("p1----------->", data);
  if(error!==''){
    return(
      <h1>{error}</h1>
    )

  }
  if (data.length !== 0) {
    return (
      <div className="text-white ml-2  bg-navColor ">
        {data.map((item) => {
          return (
            <div className="block" key={item.id}>
              <h1 className="text-2xl px-5 pt-5 psy-7 font-bold">
                ~{item.name}{" "}
              </h1>
              <CategoryPlaylist id={item.id} data={data} nbr={5} />
            </div>
          );
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

export default Categorys;
