import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { colorTheme } from "./ColorStyles";
import { variables } from "./GlobalVariables";

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${colorTheme.secondary}
        color: ${colorTheme.text};
    }

    .box-shadow--main {
        box-shadow: 0 10px 24px -8px ${(props) => props.shadowColor}
    }

    .layout--flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .layout--center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .image-container {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
`;

export const Button = styled.button`
  outline: none;
  background-color: transparent;
  padding: ${variables.sizeMediumSmall} ${variables.sizeLarge};
  color: ${colorTheme.secondary};
  border: 1px solid ${colorTheme.secondary};
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
`;
