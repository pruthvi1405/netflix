import { createSlice } from "@reduxjs/toolkit";

export const popularSlice = createSlice({
  name: "popular",
  initialState: [],
  reducers: {
    fetchMovies: (state, action) => {
      return state=action.payload
    }
  }
});

export const {fetchMovies} = popularSlice.actions;