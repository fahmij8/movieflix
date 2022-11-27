import { HeaderHome } from "components/HeaderHome";
import { Logo } from "components/Logo";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <main>
      <HeaderHome />
      <Grid container direction="column">
        <Logo />
      </Grid>
    </main>
  );
};

export default Home;
