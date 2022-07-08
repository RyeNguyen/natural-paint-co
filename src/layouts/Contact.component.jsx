import React from 'react';
import styled from 'styled-components';

import ContactImage from '../assets/images/VOCFree_Cropped-01_2022-06-23-031752_xvdm.png';
import ContactIcon from '../assets/icons/icon-leafs-white.svg';
import {Button} from "../components";
import {colorTheme} from "../components/styles/ColorStyles";
import {variables} from "../components/styles/GlobalVariables";
import {H1, TextMedium} from "../components/styles/TextStyles";

export const ContactSection = () => {
    return (
        <ContactWrapper>
            <ContactImg backgroundImage={ContactImage} className='image-container'/>
            <ContactContent>
                <ContactIconWrapper src={ContactIcon}/>
                <ContactHeadline>Needing Help?</ContactHeadline>
                <ContactDesc>Unsure what primer you need? Not sure what oil to go with? No stress! Reach out to talk to one of our experts - they’ll guide you in the right direction!</ContactDesc>
                <Button title={`Let's talk`} color={colorTheme.secondary}/>
            </ContactContent>
        </ContactWrapper>
    )
}

const ContactWrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
`;

const ContactImg = styled.div`
  width: 67%;
  background-image: url(${props => props.backgroundImage});
`;

const ContactContent = styled.div`
  width: 33%;
  background-color: ${colorTheme.dark};
  padding: ${variables.sizeHuge} ${variables.sizeExtraLarge};
`;

const ContactIconWrapper = styled.img`
  width: ${variables.sizeExtraLarge};
  height: ${variables.sizeExtraLarge};
  margin-bottom: ${variables.sizeMedium};
`;

const ContactHeadline = styled(H1)`
  color: ${colorTheme.secondary};
  margin-bottom: ${variables.sizeExtraMedium};
`;

const ContactDesc = styled(TextMedium)`
  color: ${colorTheme.secondary};
  margin-bottom: ${variables.sizeMassive};
  width: 80%;
`;