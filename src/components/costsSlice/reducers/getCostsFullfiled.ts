import { PayloadAction } from "@reduxjs/toolkit";
import { costsState, ServerItem } from "../costsSlice";

export const getCostsFullfiled = (
  state: costsState,
  action: PayloadAction<{ items: ServerItem[] }>
) => {
  state.fetchStatus = "pending";
  const { items } = action.payload;
  const Items = items.map((item) => {
    return {
      id: item.id,
      name: item.name,
      net: parseFloat(item.net),
      tax: parseFloat(item.tax),
      gross: parseFloat(item.net) / (1 - 16 / 100),
    };
  });

  state.items = Items;
  state.totalItems = Items.length;
  state.totalSum = Items.reduce((prev, curr) => prev + curr.net, 0);
  state.average = state.totalSum / state.totalItems;
  console.log(Items);
};
