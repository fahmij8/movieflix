import { useMovieflixContext } from "context/";
import Box from "@mui/material/Box";
import ImageListItem, {
  imageListItemClasses
} from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { colorBgWhite } from "styles/app";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

export const MovieCard = () => {
  const { searchResult, page, dispatch } = useMovieflixContext();

  return (
    <div style={{ marginBottom: "50px" }}>
      {searchResult?.data?.Error && (
        <Box sx={{ display: "flex", margin: "20px 0" }}>
          {searchResult.data.Error}
        </Box>
      )}
      {searchResult?.data?.Response === "True" && !searchResult.loading && (
        <>
          <Box
            sx={{
              margin: "20px 0",
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)"
              },
              gridGap: "15px",
              padding: "20px",
              [`& .${imageListItemClasses.root}`]: {
                display: "flex",
                flexDirection: "column"
              }
            }}
          >
            {searchResult?.data?.Search?.map((item) => (
              <ImageListItem
                sx={{ height: "350px !important" }}
                key={`${item.Poster}-${item.Title}`}
              >
                <img
                  src={`${item.Poster.replace("SX300", "SX500")}`}
                  alt={item.Title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.Title}
                  subtitle={`${item.Type} - ${item.Year}`}
                  actionIcon={
                    <Link to={`./${item.Type}/${item.imdbID}`}>
                      <IconButton
                        sx={{ color: colorBgWhite }}
                        aria-label={`info about ${item.Title}`}
                      >
                        <FavoriteBorderIcon />
                      </IconButton>
                    </Link>
                  }
                />
              </ImageListItem>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              margin: "20px 0",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            {searchResult.data.totalResults} results found
            <Stack spacing={2}>
              <Pagination
                count={parseInt(searchResult.data.totalResults)}
                page={page}
                onChange={(_, currPage) =>
                  dispatch({
                    type: "SET_VALUE",
                    payload: {
                      page: currPage
                    }
                  })
                }
              />
            </Stack>
          </Box>
        </>
      )}
      {searchResult?.loading && (
        <Box sx={{ display: "flex", margin: "20px 0" }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};
