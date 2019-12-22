import React from "react";
import { ButtonWrapper } from "./Button.style";

export default ({ children, handleClick }) => {
  return <ButtonWrapper onClick={handleClick}>{children}</ButtonWrapper>;
};
