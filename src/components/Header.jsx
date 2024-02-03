/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  HAMBURGER_ICON,
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
    dispatch(
      cacheResult({
        [search]: json[1],
      })
    );
  };

  const handleChange = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid h-36 md:h-24 grid-flow-col md:py-6 py-10 px-8 md:px-4 shadow-lg">
      <div className="flex col-span-1 md:mx-4 ">
        <img
          className="md:h-12 h-6  cursor-pointer"
          onClick={handleChange}
          src={HAMBURGER_ICON}
          alt="hamburger-icon"
        />
        <img
          className="md:h-16 h-12 -my-2 -p-2 md:mx-4 cursor-pointer md:-m-2"
          src={YOUTUBE_LOGO}
          alt="youtube-logo"
        />
      </div>

      <div className="md:col-span-2 md:mt-0 mt-12">
        <input
          className=" md:w-1/2 p-1 -mx-20 md:py-2 md:px-4 dark:bg-black dark:text-gray-100 outline-none border border-gray-500 rounded-l-full "
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className=" md:p-2 p-1 mx-20 dark:bg-black dark:text-white outline-none bg-gray-100 border border-gray-500 rounded-r-full">
          Search
        </button>
        {showSuggestions && (
          <div className="fixed -mx-16 w-44 py-2 px-2 dark:bg-black dark:text-gray-100 bg-white md:py-3 md:px-5 md:w-[28rem] rounded-xl border shadow-2xl">
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
      
    </div>
  );
};

export default Header;
