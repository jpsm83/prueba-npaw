import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncITunes = createAsyncThunk(
  "iTunes/fetchAsyncITunes",
  async (term) => {
    const response = await axios.get(
      `https://itunes.apple.com/search?term=${term}&entity=musicTrack&attribute=mixTerm&limit=20`
    );
    return response.data;
  }
);

// export const fetchAsyncDetails = createAsyncThunk(
//   "detail/fetchAsyncDetails",
//   async (album) => {
//     const response = await axios.get(`https://itunes.apple.com/search?term=${album}&entity=album&attribute=albumTerm`);
//     return response.data;
//   }
// );

const initialState = {
  albums: [],
  selectedAlbum: "",
};

const itunesSlice = createSlice({
  name: "iTunes",
  initialState,
  reducers: {
    clearDetails: (state) => {
      state.selectedAlbum = "";
    },
  },

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

    // [fetchAsyncDetails.pending]: () => {
    //   console.log("Pending");
    // },
    // [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
    //   console.log("Fetched Successfully!");
    //   return { ...state, selectedAlbum: payload };
    // },
    // [fetchAsyncDetails.rejected]: () => {
    //   console.log("Rejected!");
    // },
  },
});

export const { clearDetails } = itunesSlice.actions;
export const getAllAlbums = (state) => state.iTunes.albums;
// export const getSelectedDetail = (state) => state.iTunes.selectedAlbum;
export default itunesSlice.reducer;
