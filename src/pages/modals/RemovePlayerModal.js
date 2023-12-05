import { useSelector } from "react-redux";
import Button from "../../components/Button";

const RemovePlayerModal = ({ handleRemovePlayer, closeModal }) => {
  const player = useSelector((state) => {
    return state.players.find((player) => player.currentSelection === true);
  });

  if (!player) return;

  return (
    <>
      <h3 style={{ color: "red" }}>Remove {player.name}?</h3>
      <div className="space-between">
        <Button handleClick={() => closeModal(player.id)} noMinWidth noShadow>
          Cancel
        </Button>
        <Button
          handleClick={() => handleRemovePlayer(player.id)}
          noMinWidth
          noShadow
          className="ml-10"
        >
          Remove
        </Button>
      </div>
    </>
  );
};

export default RemovePlayerModal;
