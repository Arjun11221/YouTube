import React, { useEffect, useState } from "react";
import {
  HAMBURGER_ICON,
  USER_LOGO,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResult } from "../utils/searchSlice";

const Header = () => {
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[search]) {
        setSuggestion(searchCache[search]);
      } else {
        getSearch();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const getSearch = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + search);
    const json = await data.json();
    setSuggestion(json[1]);
    dispatch(cacheResult({
      [search] : json[1],
    }))
  };

  const handleChange = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-2 mx-4 ">
        <img
          className="h-12 cursor-pointer"
          onClick={handleChange}
          src={HAMBURGER_ICON}
          alt="hamburger-icon"
        />
        <img
          className="h-16  mx-4 cursor-pointer  -m-2"
          src={YOUTUBE_LOGO}
          alt="youtube-logo"
        />
      </div>

      <div className="col-span-10  ">
        <input
          className=" w-1/2 py-2 px-4 outline-none border border-gray-500 rounded-l-full "
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className=" p-2 outline-none bg-gray-100 border border-gray-500 rounded-r-full">
          Search
        </button>
        {showSuggestions && (
          <div className="fixed bg-white py-3 px-5 w-[30.8rem] rounded-xl border shadow-2xl">
            <ul>
              {suggestion.map((s) => (
                <li key={s} className="py-2 font-semibold ">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img className="h-12 " src={USER_LOGO} alt="user-logo" />
      </div>
    </div>
  );
};

export default Header;
