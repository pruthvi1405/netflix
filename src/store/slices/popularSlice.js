import { createSlice } from "@reduxjs/toolkit";

export const popularSlice = createSlice({
  name: "popular",
  initialState: [],
  reducers: {
    popular: (state, action) => {
      return state=action.payload
    }
  }
});

export const {popular} = popularSlice.actions;