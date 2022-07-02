import React from "react";
import styled from "styled-components";

import { variables } from "./styles/GlobalVariables";
import { colorTheme } from "./styles/ColorStyles";

const Button = (props) => {
  const { title, isDarkMode, backgroundColor } = props;

  return (
    <NiceButton isDarkMode={isDarkMode} backgroundColor={backgroundColor}>
      {title}
    </NiceButton>
  );
};

const NiceButton = styled.button`
  outline: none;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  padding: ${variables.sizeMediumSmall} ${variables.sizeLarge};
  color: ${(props) =>
    props.isDarkMode ? colorTheme.text : colorTheme.secondary};
  border: 1px solid
    ${(props) => {
      if (props.backgroundColor) return props.backgroundColor;
      return props.isDarkMode ? colorTheme.text : colorTheme.secondary;
    }};
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
`;

export default Button;
