import { StructInitialContext } from "../initial-context";

export const caseWatchList = {
  SET_FAVORITE: (state: StructInitialContext, payload: any) => ({
    ...state,
    watchList: [...state.watchList, payload]
  }),
  REMOVE_FAVORITE: (state: StructInitialContext, payload: any) => ({
    ...state,
    watchList: state.watchList.filter((item) => item.imdbID !== payload)
  })
};
