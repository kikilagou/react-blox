import styled from "styled-components";
import theme from "../../../styles/theme";

const CheckboxWrapper = styled.input`
  color: ${theme.colors.black};

  // Media specific sizing
  @media screen and (min-width: ${theme.values.mobile1}) {
    font: ${theme.values.smallFont};
  }

  @media screen and (min-width: ${theme.values.desktop}) {
    font: ${theme.values.defaultFont};
  }

  @media screen and (min-width: ${theme.values.highres}) {
    font: ${theme.values.largeFont};
  }
`;

export { CheckboxWrapper };
