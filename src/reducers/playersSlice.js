import { createSlice } from "@reduxjs/toolkit";

export const playersSlice = createSlice({
  name: "players",
  initialState: [],
  reducers: {
    addPlayer: (state, action) => {
      const playerBasicInfo = {
        currentSelection: false,
        score: 0,
        level: 1,
        ...action.payload,
      };
      return [playerBasicInfo, ...state];
    },
    removePlayer: (state, action) => {
      const filteredPlayers = state.filter(
        (player) => player.id !== action.payload
      );
      return [...filteredPlayers];
    },
    currentPlayer: (state, action) => {
      const currentSelectionUpdate = state.forEach((player) => {
        if (player.id === action.payload) {
          player.currentSelection = !player.currentSelection;
        }
      });
      return currentSelectionUpdate;
    },
  },
});

export const { addPlayer, removePlayer, currentPlayer } = playersSlice.actions;

export default playersSlice.reducer;
