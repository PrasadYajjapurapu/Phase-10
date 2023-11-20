import { useSelector } from "react-redux";
import Button from "../../components/Button";

const RemovePlayerModal = ({ handleRemovePlayer }) => {
  const { player } = useSelector((state) => state.player);

  return (
    <>
      <h3 style={{ color: "red" }}>Remove {player}?</h3>
      <div className="space-between">
        <Button handleClick={() => {}} noMinWidth noShadow>
          Cancel
        </Button>
        <Button
          handleClick={() => handleRemovePlayer(player)}
          noMinWidth
          noShadow
        >
          Remove
        </Button>
      </div>
    </>
  );
};

export default RemovePlayerModal;
