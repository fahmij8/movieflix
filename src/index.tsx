import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";
import { MovieflixProvider } from "./context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const AppComponent = () => {
  return (
    <MovieflixProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MovieflixProvider>
  );
};

root.render(
  <StrictMode>
    <AppComponent />
  </StrictMode>
);
