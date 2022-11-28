import { useState } from "react";
import { useMovieDetail } from "api/movie-detail";
import { useParams, Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { MovieDetail } from "types/";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
import Divider from "@mui/material/Divider";

const MovieDetails = () => {
  const { kind, id } = useParams<{ kind: string; id: string }>();
  const initMovieData = {
    loading: false,
    data: null as unknown as MovieDetail,
    error: ""
  };
  const [movie, setMovie] = useState(initMovieData);

  useMovieDetail({ i: id ?? "", type: kind ?? "", localDispatch: setMovie });

  console.log(movie);
  return (
    <main>
      <Grid container direction="row" alignItems="center" height="60px">
        <Grid item xs={12} display="flex" alignItems="flex-start">
          <Link to="/">
            <IconButton size="medium">
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
      <Container maxWidth="lg">
        {movie?.data && (
          <>
            <Grid container direction="column" alignItems="center">
              <Grid
                item
                xs={12}
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
              >
                <img
                  src={movie.data.Poster.replace("300", "4000")}
                  alt={movie.data.Title}
                  height="380px"
                />
                <Typography
                  variant="h3"
                  component="h1"
                  style={{ marginTop: "15px" }}
                >
                  {movie.data.Title}
                </Typography>
              </Grid>
            </Grid>
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Typography variant="h5" component="h2">
                <StarIcon />
                {movie.data.imdbRating}
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                style={{ margin: "0 10px" }}
              />
              <Typography variant="h5" component="h2">
                {movie.data.Released}
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                style={{ margin: "0 10px" }}
              />
              <Typography variant="h5" component="h2">
                {movie.data.Runtime}
              </Typography>
            </Stack>
            <Stack
              direction="column"
              alignItems="flex-start"
              justifyContent="center"
              style={{ marginTop: "15px" }}
            >
              <Typography>Genre : {movie.data.Genre}</Typography>
              <Typography>Director : {movie.data.Director}</Typography>
              <Typography>Actors : {movie.data.Actors}</Typography>
              <Typography>Writers : {movie.data.Writer}</Typography>
              <Typography>Plot : {movie.data.Plot}</Typography>
            </Stack>
          </>
        )}
      </Container>
    </main>
  );
};

export default MovieDetails;
