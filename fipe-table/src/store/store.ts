import { configureStore } from "@reduxjs/toolkit";
import fipeReducer from "./fipeslice";

export const store = configureStore({
  reducer: {
    fipe: fipeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
