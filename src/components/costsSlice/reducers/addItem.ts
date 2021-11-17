import { costsState, Item } from "../costsSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export const addItemReucer = (state: costsState, action: PayloadAction<Item>) => {
  state.items.push(action.payload);
};
