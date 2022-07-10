import React from "react";
import styled from "styled-components";
import { m } from "framer-motion";

import { colorTheme } from "../components/styles/ColorStyles";
import { variables } from "../components/styles/GlobalVariables";
import { Button } from "../components";

import HeroImage from "../assets/images/Red-Hero-slightly-darker.jpg";
import HeroIcon from "../assets/icons/icon-flower-brush.svg";
import { BodyMain, H1, TextSmall } from "../components/styles/TextStyles";

const heroLayoutVariants = {
  hidden: {
    height: 0,
    transition: {
      ease: [0.398, 0.305, 0, 0.995],
      duration: 2,
    },
  },
  visible: {
    height: "100%",
  },
};

const heroIconVariants = {
  hidden: {
    transform: 'scale(5)',
    zIndex: 4,
    filter: 'invert(100%)'
  },
  visible: {
    transform: 'scale(1)',
    zIndex: 1,
    filter: 'invert(0)',
    top: '0',
    left: '0',
    position: 'relative',
    transition: {
      delay: 1,
      ease: [0.398, 0.305, 0, 0.995],
      duration: 1,
    }
  }
};

const heroHeadlineVariants = {
  hidden: {
    transform: "scale(0)",
    opacity: 0,
  },
  visible: {
    transform: "scale(1)",
    opacity: 1,
    transition: {
      delay: 1.5,
      ease: [0.398, 0.305, 0, 0.995],
      duration: 2,
    },
  },
};

export const Hero = () => {
  return (
    <HeroWrapper>
      <HeroColorLayout
        as={m.div}
        variants={heroLayoutVariants}
        initial="visible"
        animate="hidden"
      />
      <HeroImageWrapper className="image-container layout--center">
        <HeroIconWrapper 
        src={HeroIcon} 
        as={m.img}
        variants={heroIconVariants}
          initial="hidden"
          animate="visible"
        />
        <HeroHeadline
          as={m.h1}
          variants={heroHeadlineVariants}
          initial="hidden"
          animate="visible"
        >
          Plant-based paint
          <br />
          creating future memories
        </HeroHeadline>
        <Button
          title="Explore Colour"
          backgroundColor={colorTheme.text}
          color={colorTheme.secondary}
        />
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
  height: 100vh;
  background-color: ${colorTheme.primary};
  padding: ${variables.sizeExtraHuge} ${variables.sizeExtraLarge}
    ${variables.sizeExtraLarge};
  position: relative;
`;

const HeroColorLayout = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${colorTheme.primary};
`;

const HeroImageWrapper = styled.div`
  width: 100%;
  height: 90%;
  background-image: url(${HeroImage});
  background-attachment: fixed;
  background-size: 100%;
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
