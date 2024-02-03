/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className=" ">
      <div className="p-4 flex flex-col md:flex-row ">
        <div className="">
        <iframe
          width=""
          className="rounded-xl md:w-[1050px] md:h-[500px] w-[350px] h-[250px] "
          height=""
          src={
            "https://www.youtube.com/embed/" +
            searchParams.get("v") +
            "?&autoplay=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        </div>
        <div className="md:w-full md:mx-2 -mx-1 md:mt-0 w-[350px] mt-6">
          <LiveChat/>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
