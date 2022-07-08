import React from "react";
import styled from "styled-components";

import { variables } from "../components/styles/GlobalVariables";
import { colorTheme } from "../components/styles/ColorStyles";
import { TextLarge, TextMedium } from "../components/styles/TextStyles";

import { FeaturesData } from "../data/FeaturesData";

export const Features = () => {
  return (
    <FeaturesWrapper>
      <FeaturesHeadline>Sustainable, natural, beautiful</FeaturesHeadline>
      <FeaturesList className='layout--flex'>
        {FeaturesData.map(feature => (
            <Feature key={feature.id}>
                <FeatureIcon src={feature.icon}/>
                <FeatureName>{feature.nameLine1}<br/>{feature.nameLine2}</FeatureName>
            </Feature>
        ))}
      </FeaturesList>
    </FeaturesWrapper>
  );
};

const FeaturesWrapper = styled.div`
  width: 100%;
  padding: ${variables.sizeHuge} 0 ${variables.sizeExtraLarge};
  background-color: ${colorTheme.grey};
`;

const FeaturesHeadline = styled(TextLarge)`
    text-align: center;
    margin-bottom: ${variables.sizeLarge};
`;

const FeaturesList = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const Feature = styled.div`
    width: 15%;
    display: flex;
    gap: ${variables.sizeMedium};
    flex-direction: column;
    align-items: center;
`;

const FeatureIcon = styled.img`
    width: ${variables.sizeExtraLarge};
    height: ${variables.sizeExtraLarge};
`;

const FeatureName = styled(TextMedium)`
    text-align: center;
`;