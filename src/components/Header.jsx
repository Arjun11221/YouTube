import React from "react";
import { HAMBURGER_ICON, USER_LOGO, YOUTUBE_LOGO } from "../utils/constant";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg" >
      <div className="flex col-span-2 mx-4 " >
        <img className="h-12" src={HAMBURGER_ICON} alt="hamburger-icon" />
        <img className="h-16  mx-4   -m-2" src={YOUTUBE_LOGO} alt="youtube-logo" />
      </div>
      <div className="col-span-10  " >
        <input className=" w-1/2 py-2 px-4 outline-none border border-gray-500 rounded-l-full " type="text" placeholder="Search" />
        <button className=" p-2 outline-none bg-gray-100 border border-gray-500 rounded-r-full">
            Search
        </button>
      </div>

      <div className="col-span-1">
        <img className="h-12 " src={USER_LOGO} alt="user-logo" />
      </div>
    </div>
  );
};

export default Header;
