import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { getAllAlbums } from "./redux/itunes/itunesSlice";
import Search from "./components/Search/Search";
import Container from '@mui/material/Container';
import AlbumsFeed from "./components/AlbumsFeed/AlbumsFeed";

function App() {

  return (
      <Container maxWidth="md">
        <Search />
        <AlbumsFeed />
      </Container>
  );
}

export default App;
