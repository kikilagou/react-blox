import styled from "styled-components";
import theme from "../../../styles/theme";

const ButtonWrapper = styled.button`
  background: ${theme.colors.white};
  color: ${theme.colors.black};
  cursor: pointer;
  font-size: ${theme.values.defaultFont};
  margin: ${theme.values.buttonMargin};
  padding: ${theme.values.buttonPadding};
  border: None;

  /* Style sub-classes */
  /* Intent */
  &.primary {
    color: ${theme.colors.white};
    background: ${theme.colors.blue2};
  }
  &.secondary {
    color: ${theme.colors.white};
    background: ${theme.colors.gray2};
  }
  &.success {
    color: ${theme.colors.white};
    background-color: ${theme.colors.green2};
  }
  &.danger {
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue2};
  }
  &.warning {
    color: ${theme.colors.white};
    background-color: ${theme.colors.yellow2};
  }
  &.info {
    color: ${theme.colors.white};
    background-color: ${theme.colors.cobalt2};
  }
  &.light {
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
  }
  &.dark {
    color: ${theme.colors.white};
    background-color: ${theme.colors.white};
  }
  &.link {
    color: ${theme.colors.blue1};
    background-color: transparent;
    border: none;
    border-radius: 0;
  }
  &.large {
    font-size: 1.2em;
    padding: 10px 16px;
    border-radius: 6px;
  }
  &.active {
  }
  &.disabled {
  }
  &.loading {
  }
  &.outline {
    color: #ddd;
    background-color: #aaa;
    // border: 1px solid #aaa;
  }
  &.minimal {
    color: #ddd;
    background-color: #aaa;
    // border: 1px solid #aaa;
  }
  &.rounded {
    border-radius: 5px;
  }
`;

export { ButtonWrapper };
