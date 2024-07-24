import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  // console.log(movies);
  return (
    movies && (
      <div className="px-6">
        <h1 className="text-lg md:text-3xl py-4">{title}</h1>
        <div className="flex overflow-x-scroll ">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MoviesList;
