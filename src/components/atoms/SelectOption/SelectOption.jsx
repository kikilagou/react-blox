import React from "react";
import { SelectOptionWrapper } from "./SelectOption.style";

export default ({ disabled, label, selected, value }) => {
  return (
    <SelectOptionWrapper
      disabled={disabled}
      lable={label}
      selected={selected}
      value={value}
    />
  );
};
