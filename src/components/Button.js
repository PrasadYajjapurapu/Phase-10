import React from "react";
import classNames from "classnames";
import "./components.css";

const Button = (props) => {
  const {
    handleClick,
    transparant,
    noShadow,
    inline,
    noBg,
    noMinWidth,
    inverse,
    children,
    ...rest
  } = props;

  const buttonStyles = classNames("app-button", {
    "app-button-no-boxshadow": noShadow,
    "app-button-inline": inline,
    "app-button-no-bg": noBg,
    "app-button-no-min-width": noMinWidth,
    "app-button-inverse-colors": inverse,
  });

  return (
    <button
      onClick={handleClick}
      className={transparant ? "app-button-transparant" : buttonStyles}
    >
      {children}
    </button>
  );
};

export default Button;
