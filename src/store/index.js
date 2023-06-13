import { configureStore } from "@reduxjs/toolkit";
import { popularSlice } from "./slices/popularSlice";
import { topRatedSlice } from "./slices/topRatedSlice";

export const store = configureStore({
  reducer: {
    popular: popularSlice.reducer,
    topRated:topRatedSlice.reducer
  }
});