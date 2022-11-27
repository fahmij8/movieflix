import { DispatchMovieflix } from "../../types";
import { StructInitialContext } from "../initial-context";
import { caseReducer } from "./case-reducer";

const cases = {
  ...caseReducer
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
