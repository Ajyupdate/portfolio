"use client";
// import { createSlice } from "@reduxjs/toolkit";

// const modeSlice = createSlice({
//   name: "mode",
//   initialState: {
//     darkMode: true,
//   },
//   reducers: {
//     toggleState: (state) => {
//       state.value = !state.value; // Toggle the boolean value
//     },
//   },
// });

// export const { toggleState } = modeSlice.actions;
// export default modeSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isToggled: false, // Initial state is off
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleState: (state) => {
      // Toggle the boolean value using Immutability with Immer
      state.isToggled = !state.isToggled;
    },
  },
});

export const { toggleState } = toggleSlice.actions;

export default toggleSlice.reducer;

