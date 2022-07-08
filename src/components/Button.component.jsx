import React from "react";
import styled from "styled-components";

import { variables } from "./styles/GlobalVariables";
import { colorTheme } from "./styles/ColorStyles";

export const Button = (props) => {
  const { title, color = colorTheme.text, backgroundColor = 'transparent'} = props;

  return (
    <NiceButton color={color} backgroundColor={backgroundColor}>
      {title}
    </NiceButton>
  );
};

const NiceButton = styled.button`
  outline: none;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  padding: ${variables.sizeMediumSmall} ${variables.sizeLarge};
  color: ${(props) => props.color};
  border: 1px solid
    ${(props) => {
      if (props.backgroundColor !== 'transparent') return props.backgroundColor;
      return props.color;
    }};
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
`;