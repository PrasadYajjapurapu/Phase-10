import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
  name: "score",
  initialState: [],
  reducers: {
    addScore: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addScore } = scoreSlice.actions;
export default scoreSlice.reducer;
