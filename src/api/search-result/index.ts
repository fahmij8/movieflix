import { useEffect } from "react";
import { useAxios } from "hooks/";
import { BASE_URL } from "constants/";
import { useMovieflixContext } from "context/";

interface UseSearchResultProps {
  s: string;
  y: string;
  type: string;
}

export const useSearchResult = ({ s, y, type }: UseSearchResultProps) => {
  const { dispatch, page } = useMovieflixContext();

  const url = new URL(BASE_URL);
  url.searchParams.append("s", s);
  url.searchParams.append("y", y);
  url.searchParams.append("type", type);
  url.searchParams.append("page", page.toString());
  url.searchParams.append("apikey", process.env.REACT_APP_API_KEY ?? "");

  const [loading, error, data] = useAxios({
    url: url.toString(),
    method: "GET",
    shouldFetch: s.length >= 3
  });

  useEffect(() => {
    dispatch({ type: "LOADING_SEARCH_RESULT", payload: loading });
    if (data) {
      dispatch({ type: "SET_SEARCH_RESULT", payload: data });
    }

    if (error) {
      dispatch({ type: "ERROR_SEARCH_RESULT", payload: error });
    }
  }, [loading]);
};
