import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllAlbums, fetchAsyncITunes } from "./redux/itunes/itunesSlice";

function App() {

const dispatch = useDispatch()

const data = useSelector(getAllAlbums)

  useEffect(() => {
    dispatch(fetchAsyncITunes("maroon"))
  }, []);

  return (
    <div className="app">
    </div>
  );
}

export default App;
