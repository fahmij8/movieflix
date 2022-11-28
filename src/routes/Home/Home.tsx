import { HeaderHome } from "components/HeaderHome";
import { Search } from "components/Search";
import { MovieCard } from "components/MovieCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const Home = () => {
  return (
    <main>
      <HeaderHome />
      <Container fixed>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Search />
          <MovieCard />
        </Grid>
      </Container>
    </main>
  );
};

export default Home;
