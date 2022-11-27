import { createElement, createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import { initialContext } from "./initial-context";

import type { ReactNode } from "react";
import type { FnDispatch } from "../types";
import type { StructInitialContext } from "./initial-context";

export interface StructMovieflixContext extends StructInitialContext {
  dispatch: FnDispatch;
}

const getInitialContext = () => initialContext;
const MovieflixContext = createContext<StructMovieflixContext>({
  ...getInitialContext(),
  dispatch: () => {}
});
const useMovieflixContext = () => useContext(MovieflixContext);

interface MovieflixProviderProps {
  children: ReactNode;
}

const MovieflixProvider = ({ children }: MovieflixProviderProps) => {
  const [state, dispatch] = useReducer(reducer, getInitialContext());

  const value = {
    ...state,
    dispatch
  };

  console.log("Movieflix context:", value);

  return createElement(MovieflixContext.Provider, { value }, children);
};

export { MovieflixProvider, useMovieflixContext };
