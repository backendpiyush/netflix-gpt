import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const query =
      "Act as a Movie Recommendation System and suggest some movies for query" +
      searchText.current.value +
      ".only give me names of only 5 movies without any extra word, Do not add anything extra beside movies name , comma seperated like the example given ahead.Example results : Gadar, Sholay, Kalki , kill , stree 2";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "llama3-8b-8192",
    });
    console.log(chatCompletion.choices[0].message.content);
    const gptResults = chatCompletion.choices[0].message.content.split(",");
    console.log(gptResults);

    const promiseArray = gptResults.map((movie) => searchMovieTmdb(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovies({ movieNames: gptResults, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className=" bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button
          className="px-4 py-2 m-4 bg-red-500 col-span-3 rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
