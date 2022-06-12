import React, { useState } from "react";
import "./AlbumsFeed.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AlbumCard from "../AlbumCard/AlbumCard";
import AddPagination from "../AddPagination/AddPagination";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AlbumsFeed = () => {
  const [albums, setAlbums] = useState([]);

  const displayAlbums = () => {
    return (
      albums.length > 0 &&
      albums.map((album, i) => {
        return (
          <Grid item xs={4}>
            <Item>
              <AlbumCard key={i + album.uniqueKey} {...album} />
            </Item>
          </Grid>
        );
      })
    );
  };

  return (
    <div>
      <Grid container spacing={2} className="feedContainer">
        {displayAlbums()}
      </Grid>
      <AddPagination setAlbums={(a) => setAlbums(a)} />
    </div>
  );
};

export default AlbumsFeed;
