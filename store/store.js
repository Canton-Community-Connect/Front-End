import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterReducer from "./user";
import { reducer as formReducer } from 'redux-form';

export const store = configureStore({
  reducer: {
    user: counterReducer,
    form: formReducer
  },
  middleware: [logger],
});
