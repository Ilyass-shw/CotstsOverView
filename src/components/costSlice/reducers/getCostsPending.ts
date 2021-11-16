import { costsState } from "../costSlice";

export const getCostsPending = (state: costsState) => {
  state.fetchStatus = "pending";
};
