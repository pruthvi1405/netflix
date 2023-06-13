import { createSlice } from "@reduxjs/toolkit";

export const topRatedSlice = createSlice({
  name: "popular",
  initialState: [],
  reducers: {
    topRated: (state, action) => {
      return state=action.payload
    }
  }
});

export const {topRated} = topRatedSlice.actions;