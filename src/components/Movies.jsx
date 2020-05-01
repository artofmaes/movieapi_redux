import React from "react";
import MovieForm from "./MovieForm";
import { useSelector } from "react-redux";
import {
  CircularProgress,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  Typography
} from "@material-ui/core";
import Favo from "./Favo";

export default () => {
  const { loading, error, data } = useSelector(state => state.movies);
  return (
    <div>
      <MovieForm />
      {loading && <CircularProgress />}
      {error !== "" && <p>{error}</p>}
      {data.length !== 0 && (
        <Grid container justify="center" spacing={4}>
          {data.map(({ imdbID, Title, Year, Poster }) => (
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
                <CardActions>
                  <Favo
                    imdbID={imdbID}
                    Title={Title}
                    Year={Year}
                    Poster={Poster}
                  />{" "}
                  Add To Favorites
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};
