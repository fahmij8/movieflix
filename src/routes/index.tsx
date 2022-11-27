import { useMemo } from "react";
import { HeaderHome } from "../components/HeaderHome";
import { getThemeOptions } from "../styles/app";
import { useMovieflixContext } from "../context";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

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
      <HeaderHome />
    </ThemeProvider>
  );
};

export default App;
