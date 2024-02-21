"use client";
import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "./slices/mode";

export const store = configureStore({
  reducer: {
    boolean: modeSlice, // Add the booleanReducer to your store
  },
});
