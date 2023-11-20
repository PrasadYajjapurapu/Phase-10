import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="home">
      <Link to="newGame">
        <Button>New Game</Button>
      </Link>
      <Link to="viewRules">
        <Button>Game Rules</Button>
      </Link>
      <Link to="history">
        <Button>History</Button>
      </Link>
      <Outlet />
    </div>
  );
};

export default Home;
