import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    mode: "light",
  },
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    changeMode(state, { payload }) {
      state.mode = payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, changeMode } =
  counterSlice.actions;

export default counterSlice.reducer;
