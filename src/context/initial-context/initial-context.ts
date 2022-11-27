import type { Search as WatchList, StructSearchResult } from "types/";

export interface StructInitialContext {
  darkMode: "dark" | "light" | undefined;
  watchList: WatchList[] | undefined;
  searchResult: StructSearchResult | undefined;
  page: number;
}
export const initialContext = {
  darkMode: undefined,
  watchList: undefined,
  searchResult: {
    error: "",
    loading: false,
    data: undefined
  },
  page: 1
};
