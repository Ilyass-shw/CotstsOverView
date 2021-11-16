import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCostsFailed } from "./reducers/getCostsFailed";
import { getCostsPending } from "./reducers/getCostsPending";
import { getCostsFullfiled } from "./reducers/getCotsFullfiled";

export const getCostsData = createAsyncThunk("costs/fetchData", async () => {
  const res = await fetch(
    "https://dl5mns5bwg.execute-api.eu-central-1.amazonaws.com/prod"
  );
  const data = await res.json();
  return data;
});
export type Item = {
  id: number;
  name: string;
  net: string;
  tax: string;
};
export interface costsState {
  item: Item[];
  fetchStatus: "idle" | "fullfilled" | "rejected" | "pending";
}
const initialState: costsState = {
  item: [],
  fetchStatus: "idle",
};
const costs = createSlice({
  name: "costs",
  initialState,
  reducers: {},
  extraReducers: (build) =>
    build
      .addCase(getCostsData.pending, getCostsPending)
      .addCase(getCostsData.fulfilled, getCostsFullfiled)
      .addCase(getCostsData.rejected, getCostsFailed),
});

export const {} = costs.actions;
export default costs.reducer;
