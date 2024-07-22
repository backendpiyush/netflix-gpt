import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="py-36 px-24 absolute bg-gradient-to-r from-black text-white w-screen aspect-video pt-[20%] ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-12 text-lg w-1/4">{overview}</p>
      <div>
        <button className="p-4 px-12 bg-white text-black hover:bg-opacity-70 text-lg bg-opacity-50 rounded-lg">
          Play
        </button>
        <button className=" mx-2 p-4 px-12 bg-white text-lg bg-opacity-50 rounded-lg  text-black hover:bg-opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
