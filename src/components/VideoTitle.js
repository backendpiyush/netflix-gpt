import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="py-36 px-6 md:px-24 absolute bg-gradient-to-r from-black text-white w-screen aspect-video pt-[20%] ">
      <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-12 text-lg w-1/4">{overview}</p>
      <div className="my-4 md: m-0">
        <button className="py-1 md:py-4 px-3 md:px-12 bg-white text-black hover:bg-opacity-70 text-lg bg-opacity-50 rounded-lg">
          Play
        </button>
        <button className="hidden md:inline-block mx-2 p-4 px-12 bg-white text-lg bg-opacity-50 rounded-lg  text-black hover:bg-opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
