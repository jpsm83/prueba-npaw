import React, { useEffect, useState } from "react";
import "./AlbumsFeed.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AlbumCard from "../AlbumCard/AlbumCard";
import AddPagination from "../AddPagination/AddPagination";
import { getAllAlbums } from "../../redux/itunes/itunesSlice";
import { useSelector } from "react-redux";
import { Co2Sharp } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AlbumsFeed = () => {

  const [albums, setAlbums] = useState([])

  // const albums = useSelector(getAllAlbums);
  
  const displayAlbums = () => {
    return albums.resultCount > 0 &&
     albums.results.map((album, i) => {
      return (<AlbumCard key={i} {...album} />);    
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="feedContainer">
        <Grid item xs="auto">
          <Item>{displayAlbums()}</Item>
        </Grid>
      </Grid>
      <AddPagination setAlbums={(a) => setAlbums(a)} />
    </Box>
  );
};

export default AlbumsFeed;
