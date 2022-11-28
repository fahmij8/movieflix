import { DispatchMovieflix } from "types/";
import { StructInitialContext } from "../initial-context";
import { caseCommon } from "./case-common";
import { caseSearchResult } from "./case-search-result";
import { caseWatchList } from "./case-watch-list";

const cases = {
  ...caseCommon,
  ...caseSearchResult,
  ...caseWatchList
};

const reducer = (state: StructInitialContext, action: DispatchMovieflix) => {
  try {
    return cases[action.type](state, action.payload);
  } catch (error) {
    console.error("Reducer Error:", error);
    return state;
  }
};

export default reducer;
