import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "./reducers/playerSlice";
import playersSlice from "./reducers/playersSlice";
import scoreSlice from "./reducers/scoreSlice";

export default configureStore({
  reducer: {
    players: playersSlice,
    player: playerSlice,
    score: scoreSlice,
  },
});
