import React from "react";
import styled from "styled-components";
import { m } from "framer-motion";

import { variables } from "./styles/GlobalVariables";
import { colorTheme } from "./styles/ColorStyles";

const buttonVariants = {
  hidden: {
    transform: "scale(0)",
    opacity: 0,
  },
  visible: {
    transform: "scale(1)",
    opacity: 1,
    transition: {
      delay: 1.8,
      ease: [0.398, 0.305, 0, 0.995],
      duration: 2,
    },
  },
};

export const Button = (props) => {
  const {
    title,
    color = colorTheme.text,
    backgroundColor = "transparent",
  } = props;

  return (
    <NiceButton
      color={color}
      backgroundcolor={backgroundColor}
      as={m.button}
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
    >
      {title}
    </NiceButton>
  );
};

const NiceButton = styled.button`
  outline: none;
  background-color: ${(props) =>
    props.backgroundcolor ? props.backgroundcolor : "transparent"};
  padding: ${variables.sizeMediumSmall} ${variables.sizeLarge};
  color: ${(props) => props.color};
  border: 1px solid
    ${(props) => {
      if (props.backgroundcolor !== "transparent") return props.backgroundcolor;
      return props.color;
    }};
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
`;
