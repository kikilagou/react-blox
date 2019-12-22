import React from "react";
import { LinkWrapper } from "./Link.style";

export default ({ children, href }) => {
  return <LinkWrapper href={href}>{children}</LinkWrapper>;
};
