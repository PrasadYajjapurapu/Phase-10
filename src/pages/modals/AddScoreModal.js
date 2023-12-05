import { useSelector } from "react-redux";
import Button from "../../components/Button";

const AddScoreModal = ({
  score,
  handleScore,
  handleKeyDown,
  handleRemovePlayer,
}) => {
  const player = useSelector((state) =>
    state.players.find((player) => player.currentSelection === true)
  );

  if (!player) return;

  return (
    <>
      <h3 style={{ color: "red" }}>Add Score</h3>
      <input
        type="number"
        className="add-player-text"
        value={score}
        onChange={(e) => handleScore(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="space-between">
        <Button handleClick={() => {}} noMinWidth noShadow>
          Level Up
        </Button>
        <Button
          handleClick={() => handleRemovePlayer(player.id)}
          noMinWidth
          noShadow
          className="ml-10"
        >
          Add Score
        </Button>
      </div>
    </>
  );
};

export default AddScoreModal;
