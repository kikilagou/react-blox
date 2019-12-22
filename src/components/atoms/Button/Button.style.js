import styled from "styled-components";
import colors from "../../../styles/colors";
import values from "../../../styles/values";

const ButtonWrapper = styled.button`
  background-color: ${colors.white};
  border-radius: ${values.buttonBorderRadius};
  color: ${colors.black};
  font-size: ${values.font};
  margin: ${values.buttonMargin};
  padding: ${values.buttonPadding};
`;

export { ButtonWrapper };
