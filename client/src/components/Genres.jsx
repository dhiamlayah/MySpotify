import axios from "axios";
import { useState, useEffect } from "react";
const Genres = () => {
  const [genres, setGenres] = useState("");
  const getGenres = async () => {
    try {
      await axios.get("http://localhost:8000/genres").then((res) => {
        setGenres(res.data.genres);
        console.log(res.data.genres);
      });
    } catch (err) {
      console.log("there is an err in genres", err);
    }
  };
  useEffect(() => {
    getGenres();
  }, []);

  return (
    <div className="  px-4 md:px-8">
      <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
          Team members
        </h3>
        <p className="text-gray-600 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Username</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Position</th>
              <th className="py-3 px-6">Salary</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
              <tr >
                <td className="px-6 py-4 whitespace-nowrap">aaaaaaaaa</td>
                <td className="px-6 py-4 whitespace-nowrap">vvvvvvvvvv</td>
              </tr>
         </tbody>
        </table>
      </div>
    </div>
  );
};

export default Genres;
