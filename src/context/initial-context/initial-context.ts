import type { Search as WatchList, StructSearchResult } from "types/";

export interface StructInitialContext {
  darkMode: "dark" | "light" | undefined;
  watchList: WatchList[];
  searchResult: StructSearchResult | undefined;
  page: number;
}
export const initialContext = {
  darkMode: undefined,
  watchList: [],
  searchResult: {
    error: "",
    loading: false,
    data: undefined
  },
  page: 1
};
