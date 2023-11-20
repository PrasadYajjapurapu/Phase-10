const PlayersListHeader = ({ isNewGame }) => {
  return (
    <>
      {!isNewGame && (
        <li>
          <span>Player</span>
          <span>Phase</span>
          <span>Score</span>
        </li>
      )}
    </>
  );
};

export default PlayersListHeader;
