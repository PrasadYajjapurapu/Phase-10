import { createSlice } from "@reduxjs/toolkit";

export const playersSlice = createSlice({
  name: "players",
  initialState: [],
  reducers: {
    addPlayer: (state, action) => {
      return [action.payload, ...state];
    },
    removePlayer: (state, action) => {
      const filteredPlayers = state.filter(
        (player) => player !== action.payload
      );
      return [...filteredPlayers];
    },
  },
});

export const { addPlayer, removePlayer } = playersSlice.actions;

export default playersSlice.reducer;
