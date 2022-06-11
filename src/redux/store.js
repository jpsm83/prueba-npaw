import { configureStore } from "@reduxjs/toolkit";
import albumsReducers from "./itunes/itunesSlice";

export const store = configureStore({
  reducer: {
    iTunes: albumsReducers,
  },
});
