import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSeach: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSeach = !state.showGptSeach;
    },
    addGptMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearch, addGptMovies } = gptSlice.actions;

export default gptSlice.reducer;
