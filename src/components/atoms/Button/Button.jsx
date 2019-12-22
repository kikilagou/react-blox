import React from "react";
import { ButtonWrapper } from "./Button.style";

export default ({ children, handleClick, className }) => {
  return (
    <ButtonWrapper className={className} onClick={handleClick}>
      {children}
    </ButtonWrapper>
  );
};
