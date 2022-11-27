import { HeaderHome } from "components/HeaderHome";
import { Logo } from "components/Logo";
import { Search } from "components/Search";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const Home = () => {
  const ResponsiveLogo = styled(Logo)(({ theme }) => ({
    margin: "20px 0",
    [theme.breakpoints.down("xs")]: {
      width: "125px",
      height: "50px"
    },
    [theme.breakpoints.up("sm")]: {
      width: "200px",
      height: "80px"
    }
  }));

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
          <ResponsiveLogo />
          <Search />
        </Grid>
      </Container>
    </main>
  );
};

export default Home;
