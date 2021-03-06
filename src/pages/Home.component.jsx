import React from "react";
import styled from 'styled-components';

import {comp, layout} from '../exporter';
import {Button} from "../components";

import {variables} from "../components/styles/GlobalVariables";
import {colorTheme} from "../components/styles/ColorStyles";
import {BodyMain, H2, TextLarge, TextMedium} from "../components/styles/TextStyles";

import SectionImage from "../assets/images/Homepag-DoubleShot.png";

const Home = () => {
    return (
        <>
            <comp.Navbar/>
            <layout.Hero/>
            <DropdownWrapper className='layout--center'>
                <DropdownLabel>I want to paint my:</DropdownLabel>
            </DropdownWrapper>
            <layout.Features/>
            <layout.Colours/>
            <InfoWrapper className='layout--center'>
                <InfoImage src={SectionImage}/>
                <InfoContent>
                    <InfoContentHeader>Paint made from plants,<br/>not petrol</InfoContentHeader>
                    <InfoContentBody>We’ve made a high quality paint that won’t compromise the environment or your
                        health.<br/><br/>
                        Conventional low VOC paints still contain nasty chemicals that seep into the air we
                        breathe.<br/><br/>
                        At Natural Paint Co, our carefully selected ingredients won’t release harmful chemicals, making
                        your home and the planet a healthier and happier place to be.</InfoContentBody>
                    <Button title='Our Difference'/>
                </InfoContent>
            </InfoWrapper>
            <DividerSection className='layout--center'>
                <DividerLabel>Free Shipping on non-rural NZ orders over $99</DividerLabel>
            </DividerSection>
            <layout.Testimonials/>
            <layout.BlogSection/>
            <layout.ContactSection/>
            <comp.Footer/>
        </>
    );
};

const DropdownWrapper = styled.div`
  width: 100%;
  padding: ${variables.sizeExtraMedium} 0;
  background-color: ${colorTheme.secondary};
`;

const DropdownLabel = styled(TextLarge)``;

const InfoWrapper = styled.div`
  width: 100%;
  padding: ${variables.sizeMassive} 0;
  gap: ${variables.sizeMassive};
`;

const InfoImage = styled.img`
  width: 40%;
`;

const InfoContent = styled.div`
  width: 31%;
`;

const InfoContentHeader = styled(H2)`
  margin-bottom: ${variables.sizeLarge};
`;

const InfoContentBody = styled(BodyMain)`
  margin-bottom: ${variables.sizeLarge};
`;

const DividerSection = styled.div`
  padding: ${variables.sizeExtraMedium} 0;
  background-color: ${colorTheme.greyDarker};
`;

const DividerLabel = styled(TextMedium)`
  font-weight: 600;
`;

export default Home;
