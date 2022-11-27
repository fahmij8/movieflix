import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";
import { MovieflixProvider } from "./context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const AppComponent = () => {
  return (
    <MovieflixProvider>
      <Routes />
    </MovieflixProvider>
  );
};

root.render(
  <StrictMode>
    <AppComponent />
  </StrictMode>
);
