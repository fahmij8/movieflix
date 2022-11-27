import { lazy, useMemo, Suspense } from "react";
import { getThemeOptions } from "../styles/app";
import { useMovieflixContext } from "../context";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router";
import { Loading } from "../components/Loading";
import useMediaQuery from "@mui/material/useMediaQuery";

const Home = lazy(async () => await import("./Home"));
const MovieDetail = lazy(async () => await import("./MovieDetail"));

const App = () => {
  const { darkMode } = useMovieflixContext();
  const themeSelected = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";
  const theme = useMemo(
    () => createTheme(getThemeOptions(darkMode ?? themeSelected)),
    [darkMode, themeSelected]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:kind/:id" element={<MovieDetail />}></Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
