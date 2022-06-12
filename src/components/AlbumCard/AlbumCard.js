import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./AlbumCard.css";

const AlbumCard = ({ artworkUrl100, artistName, collectionName }) => {
  return (
    <Card className="card-container">
      <CardMedia component="img" image={artworkUrl100} alt={collectionName} />
      <CardContent className="card-bottom">
    <Typography gutterBottom variant="h5" align="center" component="div">
          {artistName}
        </Typography>
    <Typography variant="body2" align="center" color="text.secondary">
          {collectionName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
