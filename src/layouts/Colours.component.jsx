import React, { useState } from "react";
import styled from "styled-components";

import { variables } from "../components/styles/GlobalVariables";
import { BodyMain, H3 } from "../components/styles/TextStyles";
import { ColoursData } from "../data/ColoursData";
import { colorTheme } from "../components/styles/ColorStyles";

import Button from "../components/Button.component";

const ContrastChecker = require("color-contrast-calc").ContrastChecker;

const Colours = () => {
  const [activeColour, setActiveColour] = useState(1);

  const calculateTextColor = (bgColor) => {
    const ratio = ContrastChecker.contrastRatio(colorTheme.text, bgColor);
    return ContrastChecker.ratioToLevel(ratio) === "A" ||
      ContrastChecker.ratioToLevel(ratio) === "-" ||
      ContrastChecker.ratioToLevel(ratio) === "AA"
      ? colorTheme.secondary
      : colorTheme.text;
  };

  return (
    <ColoursSection>
      <ColoursHeader className="layout--flex">
        <ColoursHeaderTitle>Popular Colours</ColoursHeaderTitle>
        <ColoursHeaderLink>View all</ColoursHeaderLink>
      </ColoursHeader>
      <ColoursList>
        {ColoursData.map((colour) => (
          <ColourWrapper
            key={colour.id}
            backgroundColor={colour.color}
            textColor={() => calculateTextColor(colour.color)}
            onClick={() => setActiveColour(colour.id)}
            className={activeColour === colour.id ? "colour--active" : ""}
          >
            <ColourNameWrapper>
              <ColourId>{colour.id}</ColourId>
              <ColourName className="colour__name">{colour.name}</ColourName>
            </ColourNameWrapper>
            <ColourButtons className="button__list">
              <Button
                color={calculateTextColor(colour.color)}
                title={`${colour.name} Test Pot - $${colour.price}`}
              />
              <Button
                color={calculateTextColor(colour.color)}
                title="All Colours"
              />
            </ColourButtons>
          </ColourWrapper>
        ))}
      </ColoursList>
    </ColoursSection>
  );
};

const ColoursSection = styled.div``;

const ColoursHeader = styled.div`
  padding: ${variables.sizeExtraLarge};
`;

const ColoursHeaderTitle = styled(H3)``;

const ColoursHeaderLink = styled(BodyMain)``;

const ColoursList = styled.div`
  width: 100%;
  height: 496px;
  display: flex;
`;

const ColourWrapper = styled.div`
  flex: 0.5;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  padding-top: ${variables.sizeExtraLarge};
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

const ColourNameWrapper = styled.div`
  display: flex;
  gap: ${variables.sizeMedium};
`;

const ColourId = styled(H3)``;

const ColourName = styled(H3)`
  display: none;
  opacity: 0;
`;

const ColourButtons = styled.div`
  position: absolute;
  left: ${variables.sizeLarge};
  bottom: ${variables.sizeLarge};
  align-items: center;
  gap: ${variables.sizeExtraMedium};
  display: none;
  opacity: 0;
`;

export default Colours;
