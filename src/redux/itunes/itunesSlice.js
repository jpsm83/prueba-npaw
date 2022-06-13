import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncITunes = createAsyncThunk(
  "iTunes/fetchAsyncITunes",
  async (term) => {
    const response = await axios.get(
      `https://itunes.apple.com/search?term=${term}&entity=musicTrack&attribute=albumTerm`
      // could also add "limit=anyNumber" but choose not to so I got more albums to render
    );
    return response.data.results;
  }
);

const initialState = {
  albums: [],
};

const itunesSlice = createSlice({
  name: "iTunes",
  initialState,

  extraReducers: {
    [fetchAsyncITunes.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncITunes.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, albums: payload };
    },
    [fetchAsyncITunes.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const getAllAlbums = (state) => state.iTunes.albums;
export default itunesSlice.reducer;
