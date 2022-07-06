import React from "react";
import styled from 'styled-components';
import {variables} from "../components/styles/GlobalVariables";

import Navbar from "../components/Navbar.component";
import Hero from "../layouts/Hero.component";
import Features from "../layouts/Features.component";
import Colours from "../layouts/Colours.component";
import BlogSection from "../layouts/Blog.component";
import ContactSection from "../layouts/Contact.component";
import Footer from "../components/Footer.component";

import {colorTheme} from "../components/styles/ColorStyles";
import {BodyMain, H2, TextLarge, TextMedium} from "../components/styles/TextStyles";

import SectionImage from "../assets/images/Homepag-DoubleShot.png";
import Button from "../components/Button.component";
import Carousel from "../layouts/Testimonials.component";

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
            <Features/>
            <Colours/>
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
            <Carousel/>
            <BlogSection/>
            <ContactSection/>
            <Footer/>
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
