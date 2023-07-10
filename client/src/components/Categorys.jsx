import { Category } from "../fakeData/Category";
import { useState, useEffect } from "react";
import axios from "axios";
const Categorys = () => {
  const [data, setData] = useState("");
  const getCategory = async () => {
    await axios
      .get("http://localhost:8000/category")
      .then((res) => {
        console.log("data from backend", res.data.categories.items);
        setData(res.data.categories.items);
      })
      .catch((err) => {
        console.log("there is an error in get catefory ", err);
      });
  };

  useEffect(() => {
    getCategory();
    console.log("front end data ", data);
  }, [setData]);
  console.log(data)
      return (
          <div className="text-white ml-2  bg-navColor h-screen">
             {data!==""&&data.map((item)=>{
              return (
                  <div className="flex">
                      <h1 className="text-xl font-bold">{item.name}</h1>
                  </div>

              )
             })}

          </div>
       );
};

export default Categorys;
