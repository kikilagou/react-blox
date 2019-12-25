import React from "react";
import { CheckboxWrapper } from "./Checkbox.style";

export default ({ children, name, value }) => {
  return (
    <CheckboxWrapper type="checkbox" name={name} value={value}>
      {children}
    </CheckboxWrapper>
  );
};
