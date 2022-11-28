import { useState } from "react";
import type { FormEvent } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { FilterContent } from "components/Filter";
import { Dialog } from "components/Global/Dialog";
import { useDialog } from "hooks/";
import { useSearchResult } from "api/search-result";
import { useMovieflixContext } from "context/";

export function Search() {
  const initSearchQuery = {
    s: "",
    y: "",
    type: ""
  };
  const { page, dispatch } = useMovieflixContext();
  const [searchQuery, setSearchQuery] =
    useState<typeof initSearchQuery>(initSearchQuery);

  useSearchResult(searchQuery);

  const { openDialog, props: dialogProps } = useDialog({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "4px",
          display: "flex",
          alignItems: "center",
          width: "100%"
        }}
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <InputBase
          sx={{ ml: 1.5, flex: 1, width: "100%" }}
          placeholder="Search Movie/Series"
          inputProps={{ "aria-label": "search movie/series" }}
          name="search"
          id="search"
          onChange={(e) =>
            setTimeout(() => {
              setSearchQuery({ ...searchQuery, s: e.target.value });
              if (page !== 1) {
                dispatch({ type: "SET_VALUE", payload: { page: 1 } });
              }
            }, 1000)
          }
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="filter"
          onClick={() => openDialog()}
        >
          <FilterListIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Paper sx={{ backgroundColor: "transparent" }} elevation={0}>
        {searchQuery.y && (
          <Chip
            label={`Year: ${searchQuery.y}`}
            onDelete={() => setSearchQuery({ ...searchQuery, y: "" })}
            sx={{ mt: 2, mr: 1 }}
          />
        )}
        {searchQuery.type && (
          <Chip
            label={`Type: ${searchQuery.type}`}
            onDelete={() => setSearchQuery({ ...searchQuery, type: "" })}
            sx={{ mt: 2 }}
          />
        )}
      </Paper>
      <Dialog {...dialogProps} title="Filter Search">
        <FilterContent {...dialogProps} setSearchQuery={setSearchQuery} />
      </Dialog>
    </>
  );
}
