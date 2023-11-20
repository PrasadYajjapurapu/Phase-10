import { useState } from "react";
import { useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { removePlayer } from "../../reducers/playersSlice";
import { currentPlayer } from "../../reducers/playerSlice";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import PlayersListHeader from "./PlayersListHeader";
import RemovePlayerModal from "../modals/RemovePlayerModal";
import AddScoreModal from "../modals/AddScoreModal";

const REMOVE_PLAYER = "REMOVE_PLAYER";
const ADD_SCORE = "ADD_SCORE";

const PlayersList = () => {
  const [open, setOpen] = useState(false);
  const [modalContentType, setModalContentType] = useState();
  const [score, setScore] = useState();
  const dispatch = useDispatch();
  const location = useLocation();
  const players = useSelector((state) => state.players);

  const isNewGame = location.pathname === "/newGame";

  // const getRandomColor = () => {
  //   const red = Math.floor(Math.random() * 256);
  //   const green = Math.floor(Math.random() * 256);
  //   const blue = Math.floor(Math.random() * 256);
  //   return `rgb(${red}, ${green}, ${blue})`;
  // };

  const confirmRemove = (player) => {
    setOpen(true);
    setModalContentType(REMOVE_PLAYER);
    dispatch(currentPlayer(player));
  };

  const addScore = (player) => {
    setOpen(true);
    setModalContentType(ADD_SCORE);
    // dispatch(currentPlayer(player));
  };

  const handleRemovePlayer = (player) => {
    dispatch(removePlayer(player));
    dispatch(currentPlayer(""));
  };

  const editOptions = (player) => {
    return (
      <>
        {isNewGame ? (
          <Button handleClick={() => confirmRemove(player)} transparant inline>
            <AiFillDelete size={25} color="red" />
          </Button>
        ) : (
          <>
            <Button handleClick={() => addScore(player)} transparant inline>
              <AiFillEdit size={25} color="#140043" />
            </Button>
            <span>0</span>
            <span>1</span>
          </>
        )}
      </>
    );
  };

  const handleAddScore = () => {
    if (score === "") return;
    // dispatch(addPlayer(player));
    // setPlayer("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddScore();
    }
    setScore(score);
  };

  const handleScore = (event) => setScore(event.target.value);

  const modalContentMapper = {
    REMOVE_PLAYER: (
      <RemovePlayerModal handleRemovePlayer={handleRemovePlayer} />
    ),
    ADD_SCORE: (
      <AddScoreModal
        score={score}
        handleScore={handleScore}
        handleKeyDown={handleKeyDown}
        handleRemovePlayer={handleRemovePlayer}
      />
    ),
  };

  return (
    <>
      <ul className="players-list">
        <PlayersListHeader isNewGame={isNewGame} />
        {players?.map((player, index) => {
          return (
            <li key={`${player}-${index}`}>
              <span>{player}</span>
              {editOptions(player)}
            </li>
          );
        })}
      </ul>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        {modalContentMapper[modalContentType]}
      </Modal>
    </>
  );
};

export default PlayersList;
