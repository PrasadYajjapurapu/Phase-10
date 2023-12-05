import { useState } from "react";
import { useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { removePlayer, currentPlayer } from "../../reducers/playersSlice";
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

  const confirmRemove = (id) => {
    openModal();
    setModalContentType(REMOVE_PLAYER);
    dispatch(currentPlayer(id));
  };

  const addScore = (id) => {
    openModal();
    setModalContentType(ADD_SCORE);
    dispatch(currentPlayer(id));
  };

  const handleRemovePlayer = (id) => {
    closeModal();
    dispatch(removePlayer(id));
  };

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

  const editOptions = (player) => {
    return (
      <>
        {isNewGame ? (
          <Button
            handleClick={() => confirmRemove(player.id)}
            transparant
            inline
          >
            <AiFillDelete size={25} color="red" />
          </Button>
        ) : (
          <>
            <Button handleClick={() => addScore(player.id)} transparant inline>
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

  const handleScore = (value) => setScore(value);

  const handleCancelRemove = (id) => {
    dispatch(currentPlayer(id));
    closeModal();
  };

  const modalContentMapper = {
    REMOVE_PLAYER: (
      <RemovePlayerModal
        handleRemovePlayer={handleRemovePlayer}
        closeModal={handleCancelRemove}
      />
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
              <span>{player.name}</span>
              {editOptions(player)}
            </li>
          );
        })}
      </ul>
      <Modal isOpen={open} onClose={closeModal}>
        {modalContentMapper[modalContentType]}
      </Modal>
    </>
  );
};

export default PlayersList;
