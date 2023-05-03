import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterReducer from "./user";

export const store = configureStore({
  reducer: {
    user: counterReducer,
  },
  middleware: [logger],
});
