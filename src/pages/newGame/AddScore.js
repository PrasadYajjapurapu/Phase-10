import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import PlayersList from "./PlayersList";

const AddScore = () => {
  const navigate = useNavigate();
  const players = useSelector((state) => state.players);

  useEffect(() => {
    let timeOut;
    if (players.length === 0) {
      timeOut = setTimeout(() => navigate(-1), 3000);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [players.length]);

  return (
    <div className="add-score">
      <h1>Add Scores</h1>
      <PlayersList />
      <div className="add-player-next">
        {players.length !== 0 && (
          <Link to="addScore">
            <Button noMinWidth>Next Round</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AddScore;
