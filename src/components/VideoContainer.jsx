/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();

    setVideos(json.items);
  };
  return (
    <div className="md:flex md:flex-wrap md:flex-row ">
      {loader ? (
        <div className="flex items-center justify-center h-screen w-full">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          {videos.map((video) => (
            <Link key={video?.id} to={"/watch?v=" + video.id}>
              <VideoCard info={video} />
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default VideoContainer;
