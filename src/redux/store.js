import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../features/UserReducer";
export const store = configureStore({
  reducer: {
    users:userReducer
  },
});
