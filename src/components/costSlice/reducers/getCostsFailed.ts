import { costsState } from "../costSlice";

export const getCostsFailed = (state: costsState) => {
  state.fetchStatus = "rejected";
};
