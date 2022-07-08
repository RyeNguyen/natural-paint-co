import React from 'react';
import styled from 'styled-components';
import {variables} from "./styles/GlobalVariables";
import {colorTheme} from "./styles/ColorStyles";

export const Input = (props) => {
    const {inputPlaceholder} = props;

    return (
        <InputWrapper placeholder={inputPlaceholder}/>
    )
}

const InputWrapper = styled.input`
  outline: none;
  padding: ${variables.sizeMedium} ${variables.sizeMedium};
  border: 1px solid ${colorTheme.greyDarker};
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  color: ${colorTheme.text};
  font-weight: 500;
  
  ::placeholder {
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    color: ${colorTheme.text};
    font-weight: 500;
  }
`;