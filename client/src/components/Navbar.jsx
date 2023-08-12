import React, { useState } from "react";
import { Link } from "react-router-dom";
import FolowPlaylist from "./folowPlaylist";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [currentPage, setCurentPage] = useState("");

  return (
    <div className="bg-navColor sm:w-72 rounded-r-lg sm:fixed">
      <nav className="bg-navColor sm:w-72 text-white	rounded-r-lg  sm:h-screen  ">
        <div className=" flex rounded-3xl">
          <img
            src="/Images/nameLogo1.jpg"
            className="hidden sm:block"
            alt="logo"
          />
          <button
            className={`${!show ? "sm:hidden ml-auto mr-2" : "hidden"}`}
            onClick={() => {
              setShow(true);
            }}
          >
            <i className="fa-solid fa-list 	" style={{ color: "white" }}></i>
          </button>
          <button
            className={`${show ? "sm:hidden ml-auto mr-2" : "hidden"}`}
            onClick={() => {
              setShow(false);
            }}
          >
            <i
              className="fa-sharp fa-solid fa-not-equal"
              style={{ color: "white" }}
            ></i>
          </button>
        </div>
        <div className={`${!show ? "hidden sm:block" : "display"}`}>
          <hr className="bg-backColor border-backColor my-4 h-2" />
          <div className=" Flow Root w-72">
            <div
              className={`${
                currentPage === "profil"
                  ? "flex mt-2 block w-full px-6 py-3 border-b  bg-gray-600 "
                  : "flex mt-2 block w-full px-6 py-3 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              }`}
            >
              <i className="fa-solid fa-user pt-1"></i>
              <Link
                onClick={() => {
                  setCurentPage("profil");
                }}
                className="pl-2 w-72"
                to="/home/profil"
              >
                PROFIL
              </Link>
            </div>
            <div
              className={`${
                currentPage === "home"
                  ? "flex mt-2 block w-full px-6 py-3 border-b  bg-gray-600 "
                  : "flex mt-2 block w-full px-6 py-3 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              }`}
            >
              <i className="fa-solid fa-house pt-1" />
              <Link
                onClick={() => {
                  setCurentPage("home");
                }}
                className="pl-2 w-72"
                to="/home/"
              >
                HOME
              </Link>
            </div>
            <div
              className={`${
                currentPage === "search"
                  ? "flex mt-2 block w-full px-6 py-3 border-b  bg-gray-600 "
                  : "flex mt-2 block w-full px-6 py-3 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              }`}
            >
              <i className="fa-solid fa-magnifying-glass pt-1"></i>
              <Link
                onClick={() => {
                  setCurentPage("search");
                }}
                className="pl-2 w-72"
                to="/home/search"
              >
                SEARCH
              </Link>
            </div>
          </div>
          <hr className="bg-backColor border-backColor my-4 h-2" />
          <p className="px-5 font-bold">Folow Playlist :</p>

          <div className=" Flow Root border-2 rounded-md m-2 h-72	">
            <FolowPlaylist/>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
