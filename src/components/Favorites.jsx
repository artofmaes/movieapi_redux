import React from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography
} from "@material-ui/core";

export default () => {
  const favorites = useSelector(state => state.favorites);

  return (
    <div>
      {favorites.length !== 0 && (
        <Grid container justify="center" spacing={4}>
          {favorites.map(({ imdbID, Title, Year, Poster }) => (
            <Grid item xs={10} md={5} key={imdbID}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={Poster}
                    title={Title}
                  />
                  <Typography variant="h6">
                    {Title} ({Year})
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      {favorites.length === 0 && (
        <Typography variant="h6">
          No favorites yet, start adding now!
        </Typography>
      )}
    </div>
  );
};
