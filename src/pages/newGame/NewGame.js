import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IoPersonAddSharp } from "react-icons/io5";
import { addPlayer } from "../../reducers/playersSlice";
import Button from "../../components/Button";
import PlayersList from "./PlayersList";

const NewGame = () => {
  const [player, setPlayer] = useState("");
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players);

  const handleAddPlayer = () => {
    if (player === "") return;
    const payload = { name: player, id: players.length + 1 };
    dispatch(addPlayer(payload));
    setPlayer("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddPlayer();
    }
  };

  return (
    <div className="player">
      <h2>Add Players</h2>
      <div className="add-player">
        <input
          type="text"
          className="add-player-text"
          value={player}
          onChange={(e) => setPlayer(e.target.value.toLocaleUpperCase())}
          onKeyDown={handleKeyDown}
        />
        <Button transparant handleClick={() => handleAddPlayer()}>
          {/* <IoPersonAddSharp size={40} color="140043" /> */}
          <IoPersonAddSharp size={40} color="green" />
        </Button>
      </div>
      <PlayersList />
      <div className="add-player-next">
        {players.length >= 2 && (
          <Link to="addScore">
            <Button noMinWidth>Start Game</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NewGame;
