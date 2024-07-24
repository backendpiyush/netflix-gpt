import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  //   console.log(movies.popularMovies);
  return (
    <div className="bg-black text-white">
      <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MoviesList title={"Popular"} movies={movies.popularMovies} />
        <MoviesList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MoviesList title={"Trending"} movies={movies.trendingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
