import styled from "styled-components";
import theme from "../../../styles/theme";

const ListWrapper = styled.ul`
  color: ${theme.colors.black};

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

export { ListWrapper };
