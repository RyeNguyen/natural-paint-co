import React from "react";
import styled from 'styled-components';
import { variables } from "../components/styles/GlobalVariables";

import Navbar from "../components/Navbar.component";
import Hero from "../layouts/Hero.component";
import {colorTheme} from "../components/styles/ColorStyles";
import {TextLarge, TextMedium} from "../components/styles/TextStyles";

const Home = () => {
    return (
        <>
            <PreNavbar className='layout--center'>
                <PreNavbarText>Free shipping on NZ orders $99+, AU orders $279</PreNavbarText>
            </PreNavbar>
            <Navbar/>
            <Hero/>
            <DropdownWrapper className='layout--center'>
                <DropdownLabel>I want to paint my:</DropdownLabel>
            </DropdownWrapper>
        </>
    );
};

const PreNavbar = styled.div`
  width: 100%;
  padding: ${variables.sizeSmall} 0;
  background-color: black;
`;

const PreNavbarText = styled(TextMedium)`
  font-weight: 600;
  color: ${colorTheme.secondary};
`;

const DropdownWrapper = styled.div`
  width: 100%;
  padding: ${variables.sizeExtraMedium} 0;
  background-color: ${colorTheme.secondary};
`;

const DropdownLabel = styled(TextLarge)``;

export default Home;
