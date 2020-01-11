import styled from "styled-components";
import theme from "../../../styles/theme";

const ButtonWrapper = styled.button`
  background: ${theme.colors.gray5};
  color: ${theme.colors.black};
  cursor: pointer;
  font-size: ${theme.values.defaultFont};
  margin: ${theme.values.buttonMargin};
  padding: ${theme.values.buttonPadding};
  border: 1px solid ${theme.colors.gray4};

  /* Style sub-classes */
  /* Intent */
  &.primary {
    color: ${theme.colors.white};
    background: ${theme.colors.blue2};
  }
  &.primary:active {
    color: ${theme.colors.white};
    background: ${theme.colors.blue1};
  }
  &.secondary {
    color: ${theme.colors.white};
    background: ${theme.colors.gray2};
  }
  &.secondary:active {
    color: ${theme.colors.white};
    background: ${theme.colors.gray1};
  }
  &.success {
    color: ${theme.colors.white};
    background-color: ${theme.colors.green2};
  }
  &.success:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.green1};
  }
  &.danger {
    color: ${theme.colors.white};
    background-color: ${theme.colors.red2};
  }
  &.danger:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.red1};
  }
  &.warning {
    color: ${theme.colors.white};
    background-color: ${theme.colors.yellow2};
  }
  &.warning:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.yellow1};
  }
  &.info {
    color: ${theme.colors.white};
    background-color: ${theme.colors.cobalt3};
  }
  &.info:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.cobalt2};
  }
  &.light {
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
  }
  &.dark {
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
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
    // border and text colored only
  }
  &.minimal {
    color: #ddd;
    background-color: #aaa;
  }
  &.rounded {
    border-radius: 3px;
  }

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

export { ButtonWrapper };
