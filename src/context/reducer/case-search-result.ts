import { StructInitialContext } from "../initial-context";

export const caseSearchResult = {
  SET_SEARCH_RESULT: (state: StructInitialContext, payload: any) => ({
    ...state,
    searchResult: {
      ...state.searchResult,
      data: payload
    }
  }),
  LOADING_SEARCH_RESULT: (state: StructInitialContext, payload: any) => ({
    ...state,
    searchResult: {
      ...state.searchResult,
      loading: payload
    }
  }),
  ERROR_SEARCH_RESULT: (state: StructInitialContext, payload: any) => ({
    ...state,
    searchResult: {
      ...state.searchResult,
      error: payload
    }
  })
};
