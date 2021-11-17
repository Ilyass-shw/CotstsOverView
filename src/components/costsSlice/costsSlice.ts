import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCostsFullfiled } from "./reducers/getCostsFullfiled";
import { getCostsPendig } from "./reducers/getCostsPending";
import { getCostsRejected } from "./reducers/getCostsRejected";
import { addItemReucer } from "./reducers/addItem";

export const getCosts = createAsyncThunk("costs/fetchCosts", async () => {
  const res = await fetch(
    "https://dl5mns5bwg.execute-api.eu-central-1.amazonaws.com/prod"
  );
  return await res.json();
});

export type ServerItem = {
  id: number;
  name: string;
  net: string;
  tax: string;
};

export type Item = {
  id: number;
  name: string;
  net: number;
  tax: number;
  gross: number;
};

export interface costsState {
  fetchStatus: "idle" | "fullfiled" | "pending" | "rejected";
  items: Item[];
  totalSum: number;
  totalItems: number;
  average: number;
}

const initialState: costsState = {
  fetchStatus: "idle",
  items: [],
  totalSum: 0,
  totalItems: 0,
  average: 0,
};

const costsSlice = createSlice({
  name: "costs",
  initialState,
  reducers: {
    addItem: addItemReucer,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCosts.fulfilled, getCostsFullfiled)
      .addCase(getCosts.pending, getCostsPendig)
      .addCase(getCosts.rejected, getCostsRejected),
});

export const { addItem } = costsSlice.actions;
export default costsSlice.reducer;
