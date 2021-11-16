import { configureStore } from "@reduxjs/toolkit";
import costsReducer from "./costSlice/costSlice";
export const store = configureStore({
  reducer: {
    costs: costsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
