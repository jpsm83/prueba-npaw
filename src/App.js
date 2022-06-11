import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { getAllAlbums } from "./redux/itunes/itunesSlice";
import Search from "./components/Search/Search";
import AlbumCard from "./components/AlbumCard/AlbumCard";

function App() {

const data = useSelector(getAllAlbums)

console.log(data)

  return (
    <div className="app">
    <Search />
    <AlbumCard />
    </div>
  );
}

export default App;
