import React from "react";
import { CheckboxWrapper } from "./Checkbox.style";

export default ({ name, value, checked }) => {
  return (
    <CheckboxWrapper
      type="checkbox"
      name={name}
      value={value}
      checked={checked}
    />
  );
};
