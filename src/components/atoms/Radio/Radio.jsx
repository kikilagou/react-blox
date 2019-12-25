import React from "react";
import { RadioWrapper } from "./Radio.style";

export default ({ name, value }) => {
  return <RadioWrapper type="radio" name={name} value={value} />;
};
