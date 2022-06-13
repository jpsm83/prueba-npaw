import React from "react";
import AlbumsFeed from "../../components/AlbumsFeed/AlbumsFeed";
import Search from "../../components/Search/Search";
import Grid from '@mui/material/Grid';
import "./Home.css"

const Home = () => {
  return (
    <Grid container spacing={2} className="home-container">
      <Grid item xs={12}>
          <Search />
      </Grid>
      <Grid item xs={12} className="feed-container">
          <AlbumsFeed />
      </Grid>
    </Grid>
  );
};

export default Home;
