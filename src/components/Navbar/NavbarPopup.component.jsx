import React from 'react';
import styled from 'styled-components';
import {variables} from "../styles/GlobalVariables";

const NavbarPopup = () => {
    return (
        <PopupWrapper>

        </PopupWrapper>
    )
}

const PopupWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: ${variables.sizeExtraHuge} ${variables.sizeExtraLarge} ${variables.sizeExtraLarge};
  background-color: #EFECE2;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
`

export default NavbarPopup;