import { PayloadAction } from "@reduxjs/toolkit";
import { costsState, Item } from "../costSlice";

export const getCostsFullfiled = (
  state: costsState,
  action: PayloadAction<Item[]>
) => {
  state.fetchStatus = "fullfilled";
  state.item = action.payload;
};
