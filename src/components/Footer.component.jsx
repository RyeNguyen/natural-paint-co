import React from 'react';
import styled from 'styled-components';

import Input from "./Input.component";

import Icon from '../assets/icons/icon-flower-brush.svg';
import {variables} from "./styles/GlobalVariables";
import {H3, TextSmall} from "./styles/TextStyles";
import {colorTheme} from "./styles/ColorStyles";

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterHeader className='layout--flex'>
                <FooterIcon src={Icon}/>
                <FooterForm>
                    <FooterFormLabel>Stay in touch with us</FooterFormLabel>
                    <Input inputPlaceholder='Email'/>
                </FooterForm>
            </FooterHeader>

            <FooterMiddle className='layout--flex'>
                <FooterBrand>NATURAL PAINT CO</FooterBrand>
                <FooterSocial/>
            </FooterMiddle>

            <FooterBottom className='layout--flex'>
                <FooterColumn>
                    <FooterLink>CONTACT</FooterLink>
                    <FooterLink>FAQ</FooterLink>
                    <FooterLink>APPLICATORS</FooterLink>
                </FooterColumn>

                <FooterColumn>
                    <FooterLink>INFORMATION SHEETS</FooterLink>
                    <FooterLink>SHIPPING & RETURNS</FooterLink>
                    <FooterLink>PRICE LIST</FooterLink>
                </FooterColumn>

                <FooterColumn>
                    <FooterLink>PRESS</FooterLink>
                    <FooterLink>AWARDS</FooterLink>
                    <FooterLink>PERFORMANCE GUARANTEE</FooterLink>
                </FooterColumn>

                <FooterColumn>
                    <FooterLink>TERMS & CONDITIONS</FooterLink>
                    <FooterLink>PRIVACY POLICY</FooterLink>
                    <FooterLink>PURCHASE AGREEMENT</FooterLink>
                </FooterColumn>

                <div/>
            </FooterBottom>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
  padding: ${variables.sizeHuge} ${variables.sizeExtraLarge} ${variables.sizeExtraHuge};
`;

const FooterHeader = styled.div`
  align-items: flex-start;
  margin-bottom: ${variables.sizeExtraLarge};
`;

const FooterIcon = styled.img`
  width: 2%;
  filter: invert(100%);
`;

const FooterForm = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
  gap: ${variables.sizeMedium};
`;

const FooterFormLabel = styled(H3)``;

const FooterFormInput = styled.input``;

const FooterMiddle = styled.div`
  margin-bottom: ${variables.sizeExtraLarge};
`;

const FooterBrand = styled(TextSmall)`
  letter-spacing: 0.5px;
  font-weight: 600;
`;

const FooterSocial = styled.div``;

const FooterBottom = styled.div`
  padding-top: ${variables.sizeLarge};
  border-top: 1px solid ${colorTheme.greyDarker};
`;

const FooterColumn = styled.div`
  width: 24%;
`;

const FooterLink = styled(TextSmall)`
  cursor: pointer;
  letter-spacing: 0.5px;
  font-weight: 600;
  display: flex;
  margin-bottom: ${variables.sizeSmall};
`;

export default Footer;