import { StructInitialContext } from "../initial-context";

export const caseCommon = {
  SET_VALUE: (state: StructInitialContext, payload: any) => ({
    ...state,
    ...payload
  })
};
