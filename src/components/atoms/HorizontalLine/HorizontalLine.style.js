import styled from "styled-components";
import theme from "../../../styles/theme";

const HorizontalLineWrapper = styled.hr`
  color: ${theme.colors.black};
  &.full {
    width: 100%;
  }
  &.half {
    width: 50%;
  }
`;

export { HorizontalLineWrapper };
