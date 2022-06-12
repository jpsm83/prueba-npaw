import React, { useState } from "react";
import "./AlbumsFeed.css";
import Grid from "@mui/material/Grid";
import AlbumCard from "../AlbumCard/AlbumCard";
import AddPagination from "../AddPagination/AddPagination";
import { v4 as uuidv4 } from "uuid";

const AlbumsFeed = () => {
  const [albums, setAlbums] = useState([]);

  const displayAlbums = () => {
    return (
      albums.length > 0 &&
      albums.map((album, i) => {
        return (
          <Grid item xs={3}>
            <AlbumCard key={uuidv4()} {...album} />
          </Grid>
        );
      })
    );
  };

  return (
    <div>
      <AddPagination setAlbums={(a) => setAlbums(a)} />
      <Grid container spacing={2} className="feedContainer">
        {displayAlbums()}
      </Grid>
    </div>
  );
};

export default AlbumsFeed;
