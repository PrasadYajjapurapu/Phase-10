import { useSelector } from "react-redux";
import Button from "../../components/Button";

const AddScoreModal = ({
  score,
  setScore,
  handleKeyDown,
  handleRemovePlayer,
}) => {
  const { player } = useSelector((state) => state.player);

  return (
    <>
      <h3 style={{ color: "red" }}>Add Score</h3>
      <input
        type="text"
        className="add-player-text"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="space-between">
        <Button handleClick={() => {}} noMinWidth noShadow>
          Add with Promotion
        </Button>
        <Button
          handleClick={() => handleRemovePlayer(player)}
          noMinWidth
          noShadow
        >
          Add Score
        </Button>
      </div>
    </>
  );
};

export default AddScoreModal;
