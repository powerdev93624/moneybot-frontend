import { combineReducers, configureStore } from "@reduxjs/toolkit";

import appSlice from "./slices/AppSlice";

const rootReducer = combineReducers({
  app: appSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
