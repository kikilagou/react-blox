import React from "react";
import { SelectWrapper } from "./Select.style";

export default ({ children, id, name, value, handleChange }) => {
  return (
    <SelectWrapper id={id} name={name} value={value} onChange={handleChange}>
      {children}
    </SelectWrapper>
  );
};
