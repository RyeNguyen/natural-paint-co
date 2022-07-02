import React from 'react';
import styled from 'styled-components';
import { variables } from '../components/styles/GlobalVariables';
import { BodyMain, H3 } from '../components/styles/TextStyles';

const Colours = () => {
    return (
        <ColoursSection>
            <ColoursHeader className="layout--flex">
                <ColoursHeaderTitle>Popular Colours</ColoursHeaderTitle>
                <ColoursHeaderLink>View all</ColoursHeaderLink>
            </ColoursHeader> 
        </ColoursSection>
    )
}

const ColoursSection = styled.div``;

const ColoursHeader = styled.div`
    padding: ${variables.sizeLarge} ${variables.sizeExtraLarge};
`;

const ColoursHeaderTitle = styled(H3)``;

const ColoursHeaderLink = styled(BodyMain)``;

export default Colours;