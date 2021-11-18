import { costsState } from "../costsSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export const addItemReucer = (
  state: costsState,
  action: PayloadAction<{ name: string; net: string }>
) => {
  const Gross = parseFloat(action.payload.net) / (1 - 16 / 100);
  console.log(action.payload);
  state.items.push({
    id: state.totalItems + 1,
    name: action.payload.name,
    net: parseFloat(action.payload.net),
    gross: Gross,
    tax: Gross * (1 - 16 / 100),
  });
};
