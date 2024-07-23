import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSeach = useSelector((store) => store.gpt.showGptSeach);
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGptSeach ? (
        <GptSearch />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />{" "}
        </>
      )}
    </div>
  );
};

export default Browse;
