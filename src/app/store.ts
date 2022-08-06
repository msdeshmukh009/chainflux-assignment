import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import batchSlice from "../features/batch/batchSlice";

export const store = configureStore({
  reducer: {
    batch: batchSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
