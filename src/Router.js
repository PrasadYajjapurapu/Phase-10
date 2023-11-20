import { Routes, Route } from "react-router-dom";
import GameHistory from "./pages/GameHistory";
import Home from "./pages/Home";
import AddScore from "./pages/newGame/AddScore";
import NewGame from "./pages/newGame/NewGame";
import ViewRules from "./pages/ViewRules";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="viewRules" element={<ViewRules />} />
      <Route path="history" element={<GameHistory />} />
      <Route path="newGame" element={<NewGame />} />
      <Route path="newGame/addScore" element={<AddScore />} />
    </Routes>
  );
};

export default Router;
