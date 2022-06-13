import React, { useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AlbumCard from "../AlbumCard/AlbumCard";
import AddPagination from "../AddPagination/AddPagination";
import { v4 as uuidv4 } from "uuid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  backgroundColor: "transparent",
  boxShadow: "none",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  color: theme.palette.text.secondary,
}));

const AlbumsFeed = () => {
  const [albums, setAlbums] = useState([]);

  const displayAlbums = () => {
    return albums.map((album, i) => {
      return (
        <Grid item xs={2} sm={4} md={4} key={i}>
          <Item>
            <AlbumCard key={uuidv4()} {...album} />
          </Item>
        </Grid>
      );
    });
  };

  return (
    <div>
      <AddPagination setAlbums={(a) => setAlbums(a)} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {displayAlbums()}
        </Grid>
      </Box>
    </div>
  );
};

export default AlbumsFeed;
