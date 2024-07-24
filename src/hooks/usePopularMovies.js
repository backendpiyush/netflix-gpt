import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const movies = await data.json();
    dispatch(addPopularMovies(movies.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
