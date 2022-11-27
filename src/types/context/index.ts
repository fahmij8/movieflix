import type { Dispatch } from "react";

export interface DispatchMovieflix {
  type: "SET_VALUE";
  payload: any;
}

export type FnDispatch = Dispatch<DispatchMovieflix>;
