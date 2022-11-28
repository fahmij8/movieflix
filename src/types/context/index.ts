import type { Dispatch } from "react";

export interface DispatchMovieflix {
  type:
  | "SET_VALUE"
  | "SET_SEARCH_RESULT"
  | "ERROR_SEARCH_RESULT"
  | "LOADING_SEARCH_RESULT"
  | "SET_FAVORITE"
  | "REMOVE_FAVORITE";
  payload: any;
}

export type FnDispatch = Dispatch<DispatchMovieflix>;
export interface AsyncStruct {
  loading: boolean;
  error: string;
}
