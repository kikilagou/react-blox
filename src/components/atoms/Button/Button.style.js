import styled from "styled-components";
import theme from "../../../styles/theme";

const ButtonWrapper = styled.button`
  background-color: ${theme.colors.white};
  border-radius: ${theme.values.buttonBorderRadius};
  color: ${theme.colors.black};
  font-size: ${theme.values.buttonFont};
  margin: ${theme.values.buttonMargin};
  padding: ${theme.values.buttonPadding};
`;

export { ButtonWrapper };
