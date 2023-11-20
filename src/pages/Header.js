import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Logo from "./Logo";
import User from "./User";

const Header = () => {
  const navigate = useNavigate();
  const currentRoute = useLocation().pathname;

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="App-header">
      <div>
        {currentRoute !== "/" ? (
          <Button handleClick={handleBack} noShadow noMinWidth inverse>
            Back
          </Button>
        ) : (
          <></>
        )}
      </div>
      <header>Phase10</header>
      <div>
        <Logo />
      </div>
    </div>
  );
};

export default Header;
