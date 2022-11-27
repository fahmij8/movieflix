import { StructInitialContext } from "../initial-context";

export const caseCommon = {
  SET_VALUE: (state: StructInitialContext, action: any) => ({
    ...state,
    ...action
  })
};
