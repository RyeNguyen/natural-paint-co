import React, { useState } from "react";
import styled from "styled-components";

import { variables } from "../components/styles/GlobalVariables";
import { BodyMain, H3 } from "../components/styles/TextStyles";
import { ColoursData } from "../data/ColoursData";

const Colours = () => {
  const [activeColour, setActiveColour] = useState(1);

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
            onClick={() => setActiveColour(colour.id)}
            className={activeColour === colour.id ? 'colour--active' : ''}
          >
            {colour.name}
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
  height: 65vh;
  display: flex;
`;

const ColourWrapper = styled.div`
  flex: 0.5;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

export default Colours;
