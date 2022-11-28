import { useMovieflixContext } from "context/";
import Box from "@mui/material/Box";
import ImageListItem, {
  imageListItemClasses
} from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import { colorBgWhite, colorError } from "styles/app";

export const MovieCard = () => {
  const { searchResult, page, dispatch, watchList } = useMovieflixContext();

  const isFavorited = (imdbID: string) => {
    return watchList.find((item) => item.imdbID === imdbID);
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      {searchResult?.data?.Error && !searchResult.loading && (
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
                  src={`${item.Poster.replace("SX300", "SX1000")}`}
                  alt={item.Title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/300";
                  }}
                />
                <ImageListItemBar
                  title={
                    <Link
                      to={`./${item.Type}/${item.imdbID}`}
                      style={{ textDecoration: "none", color: colorBgWhite }}
                    >
                      <Typography>{item.Title}</Typography>
                    </Link>
                  }
                  subtitle={`${item.Type.charAt(
                    0
                  ).toUpperCase()}${item.Type.substring(1).toLowerCase()} - ${
                    item.Year
                  }`}
                  actionIcon={
                    isFavorited(item.imdbID) ? (
                      <IconButton
                        sx={{ color: colorError }}
                        aria-label={`info about ${item.Title}`}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FAVORITE",
                            payload: item.imdbID
                          })
                        }
                      >
                        <FavoriteIcon />
                      </IconButton>
                    ) : (
                      <IconButton
                        sx={{ color: colorBgWhite }}
                        aria-label={`info about ${item.Title}`}
                        onClick={() =>
                          dispatch({
                            type: "SET_FAVORITE",
                            payload: item
                          })
                        }
                      >
                        <FavoriteBorderIcon />
                      </IconButton>
                    )
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
