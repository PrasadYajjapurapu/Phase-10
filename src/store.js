import { configureStore } from "@reduxjs/toolkit";
import playersSlice from "./reducers/playersSlice";
import scoreSlice from "./reducers/scoreSlice";

export default configureStore({
  reducer: {
    players: playersSlice,
    score: scoreSlice,
  },
});
