import { Logo } from "./components/Logo";
import { CssBaseline } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getThemeOptions } from "./styles/app";
import { useMemo } from "react";

const App = () => {
  const isPrefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";
  const theme = useMemo(
    () => createTheme(getThemeOptions(isPrefersDarkMode)),
    [isPrefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Logo />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </ThemeProvider>
  );
};

export default App;
