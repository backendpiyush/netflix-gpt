import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const movies = await data.json();
    dispatch(addUpcomingMovies(movies.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
