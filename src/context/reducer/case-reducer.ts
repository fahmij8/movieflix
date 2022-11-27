import { StructInitialContext } from "../initial-context";

export const caseReducer = {
  SET_VALUE: (state: StructInitialContext, action: any) => ({
    ...state,
    ...action
  })
};
