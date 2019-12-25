import React from "react";
import { SelectWrapper } from "./Select.style";

export default ({ id, name, value, handleChange }) => {
  return (
    <SelectWrapper
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
    ></SelectWrapper>
  );
};
