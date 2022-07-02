import { createGlobalStyle } from "styled-components";
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

    .colour--active {
        flex: 8;
        cursor: default;
        padding: ${variables.sizeLarge};
    }
`;
