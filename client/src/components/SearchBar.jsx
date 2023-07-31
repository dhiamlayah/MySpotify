import React, { useState } from "react";
const SearchBar = (props) => {
  const [currentType, setCurrentType] = useState("All");
  const filterSearchBy = [
    "All",
    "Album",
    "Artist",
    "Playlist",
    "Song",
    "Epsiode",
    "Show",
  ];

  const handleClick = (searchBy)=>{
    if(searchBy === "All"){
      props.setSearchBy("album%2Cartist%2Ctrack%2Cplaylist%2Cshow%2Cepisode%2Caudiobook")
    }else if(searchBy==="Song"){
      props.setSearchBy('track')
    }
    else{
      props.setSearchBy(searchBy.toLocaleLowerCase()); 
    }
    setCurrentType(searchBy)
  }
  
  return (
    <div className="bg-navColor rounded-l-xl ">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex w-full">
          <div className="relative bg-navColor w-1/3  m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              onChange={(e) => props.onSearchMusic(e)}
              placeholder="Search"
              className=" bg-navColor py-3 pl-12  w-full  text-gray-500 border rounded-3xl outline-none bg-gray-50 focus:border-gray-600  focus:border-4"
            />
          </div>

          {props.musicSearch &&
            filterSearchBy.map((searchBy) => {
              return (
                <button
                key={searchBy}
                  className={
                    currentType === searchBy
                      ? " mx-2 my-4 h-10 w-16 bg-gray-600 rounded-xl text-white text-sm"
                      : "mx-2 my-4 h-10 w-16 bg-backColor rounded-xl text-white hover:bg-gray-600 text-sm"
                  }
                  onClick={() => { handleClick(searchBy)}}
                >
                  {searchBy}
                </button>
              );
            })}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
