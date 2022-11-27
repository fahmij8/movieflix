import type { Search as WatchList, SearchResult } from "../../types";

export interface StructInitialContext {
  darkMode: "dark" | "light" | undefined;
  watchList: WatchList[] | undefined;
  searchResult: SearchResult[] | undefined;
}
export const initialContext = {
  darkMode: undefined,
  watchList: undefined,
  searchResult: undefined
};
