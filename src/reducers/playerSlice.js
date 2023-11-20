import { createSlice } from "@reduxjs/toolkit";

const playerSlioce = createSlice({
  name: "player",
  initialState: { player: "" },
  reducers: {
    currentPlayer: (state, action) => {
      return { ...state, player: action.payload };
    },
  },
});

export const { currentPlayer } = playerSlioce.actions;
export default playerSlioce.reducer;
