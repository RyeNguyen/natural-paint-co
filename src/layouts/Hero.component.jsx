import React from "react";
import styled from "styled-components";
import { colorTheme } from "../components/styles/ColorStyles";
import { variables } from "../components/styles/GlobalVariables";
import Button from "../components/Button.component";

import HeroImage from "../assets/images/Red-Hero-slightly-darker.jpg";
import HeroIcon from "../assets/icons/icon-flower-brush.svg";
import { BodyMain, H1, TextSmall } from "../components/styles/TextStyles";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroImageWrapper className="image-container layout--center">
        <HeroIconWrapper src={HeroIcon} />
        <HeroHeadline>
          Plant-based paint
          <br />
          creating future memories
        </HeroHeadline>
        <Button title="Explore Colour" isDarkMode={false} backgroundColor={colorTheme.text}/>
      </HeroImageWrapper>
      <HeroImageFooter className="layout--flex">
        <Favorite>
          <FavoriteText>Colour: Cotton</FavoriteText>
        </Favorite>
        <Review>
          <ReviewText>100+ Five Star Reviews</ReviewText>
        </Review>
        <div />
      </HeroImageFooter>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${colorTheme.primary};
  padding: ${variables.sizeSmall} ${variables.sizeExtraLarge}
    ${variables.sizeExtraLarge};
`;

const HeroImageWrapper = styled.div`
  width: 100%;
  height: 70vh;
  background-image: url(${HeroImage});
  flex-direction: column;
  gap: ${variables.sizeLarge};
`;

const HeroIconWrapper = styled.img`
  width: 40px;
`;

const HeroHeadline = styled(H1)`
  color: ${colorTheme.secondary};
  text-align: center;
`;

const HeroButton = styled(Button)`
  background-color: ${colorTheme.text};
  border-color: ${colorTheme.text};
`;

const HeroImageFooter = styled.div`
  background-color: ${colorTheme.secondary};
  padding: ${variables.sizeMedium} ${variables.sizeMedium};
`;

const Favorite = styled.div`
  display: flex;
  align-items: center;
  gap: ${variables.sizeSmall};
`;

const FavoriteText = styled(TextSmall)`
  text-transform: uppercase;
  font-weight: 600;
`;

const Review = styled.div`
  display: flex;
  align-items: center;
  gap: ${variables.sizeSmall};
`;

const ReviewText = styled(BodyMain)``;

export default Hero;
