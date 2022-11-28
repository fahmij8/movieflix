import { useAxios } from "hooks/";
import { BASE_URL } from "constants/";
import { Dispatch, SetStateAction, useEffect } from "react";

interface UseMovieDetailProps {
  i: string;
  type: string;
  localDispatch: Dispatch<SetStateAction<any>>;
}

export const useMovieDetail = ({
  i,
  type,
  localDispatch
}: UseMovieDetailProps) => {
  const url = new URL(BASE_URL);
  url.searchParams.append("i", i);
  url.searchParams.append("type", type);
  url.searchParams.append("plot", "full");
  url.searchParams.append("apikey", process.env.REACT_APP_API_KEY ?? "");

  const [loading, error, data] = useAxios({
    url: url.toString(),
    method: "GET",
    shouldFetch: true
  });

  useEffect(() => {
    localDispatch((prevState: any) => ({
      ...prevState,
      loading
    }));
    if (data) {
      localDispatch((prevState: any) => ({
        ...prevState,
        data
      }));
    }
    if (error) {
      localDispatch((prevState: any) => ({
        ...prevState,
        error
      }));
    }
  }, [loading]);
};
