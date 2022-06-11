import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { getAllAlbums } from "./redux/itunes/itunesSlice";
import Search from "./components/Search/Search";

function App() {

const data = useSelector(getAllAlbums)

console.log(data)

  return (
    <div className="app">
    <Search />
    </div>
  );
}

export default App;
