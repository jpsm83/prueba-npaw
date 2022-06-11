import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// const AlbumCard = (props) => {
const AlbumCard = ({ artworkUrl100, artistName, collectionName }) => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={artworkUrl100}
          alt={collectionName}

        />
        <CardContent>
          <Typography variant="h6" component="div">
            {artistName}
          </Typography>
          <Typography variant="h6" color="text.secondary">
           {collectionName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AlbumCard;
