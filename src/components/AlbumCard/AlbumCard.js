import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const AlbumCard = () => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://images-na.ssl-images-amazon.com/images/I/414W3F1A57L._QL70_ML2_.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h6" component="div">
            Red Hot Chilly Pepers
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Under the covers
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AlbumCard;
