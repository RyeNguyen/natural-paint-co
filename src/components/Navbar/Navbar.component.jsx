import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { m } from "framer-motion";

import { debounce } from "../../utilities/helpers";

import NavbarPopup from "./NavbarPopup.component";

import { colorTheme } from "../styles/ColorStyles";
import { variables } from "../styles/GlobalVariables";
import { BodyMain, TextMedium } from "../styles/TextStyles";

import Arrow from "../../assets/icons/triangle-arrow.svg";
import Heart from "../../assets/icons/icon-heart-outline.svg";

const navbarVariants = {
  hidden: {
    opacity: 0,
    transform: "translateY(-100%)",
  },
  animate: {
    opacity: 1,
    transform: "translateY(0)",
    transition: {
      delay: 1,
      ease: [0.398, 0.305, 0, 0.995],
      duration: 1.4,
    },
  },
};

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const [visible, setVisible] = useState(true);

  const [bannerVisible, setBannerVisible] = useState(true);

  const handleScroll = debounce(() => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 50) ||
        currentScrollPos < 10
    );

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  }, 80);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      <NavbarWrapper
        visible={visible}
        as={m.div}
        variants={navbarVariants}
        initial="hidden"
        animate="animate"
      >
        {/*Some kind of a promotion banner*/}
        <PreNavbar className="layout--flex" bannerVisible={bannerVisible}>
          <div />
          <PreNavbarText>
            Free shipping on NZ orders $99+, AU orders $279
          </PreNavbarText>
          <PreNavbarButton onClick={() => setBannerVisible(false)}>
            <svg viewBox="0 0 44 44" className="w-full h-full fill-current">
              <path d="M44 40.4l-4.1 4.1L22 26.6 4.1 44.5 0 40.3l17.9-17.9L0 4.6 4.1.5 22 18.4 39.9.5 44 4.7 26.1 22.5 44 40.4z"></path>
            </svg>
          </PreNavbarButton>
        </PreNavbar>

        {/*Main navigation bar*/}
        <MainNavbar className="layout--flex" bannerVisible={bannerVisible}>
          <NavbarLogo>
            <Link to="/">
              <svg
                viewBox="0 0 117.8 51"
                aria-labelledby="title-logo"
                className="w-full h-full fill-current"
              >
                <path
                  d="M68.5,38.1V42c0,2.1,0,3.9,0.2,4.8c0.2,1,0.9,1.5,1.6,1.5c0.9,0,1.8-0.4,2.4-1.1c0.3-0.3,0.6,0.1,0.4,0.4
    c-0.8,1-1.7,1.8-2.8,2.4c-0.9,0.6-2,0.9-3.1,0.9c-0.4,0-0.9,0-1.3-0.2c-0.4-0.2-0.8-0.4-1.1-0.7c-0.6-0.7-0.9-1.8-0.9-3.2
    c0-1,0.1-3.7,0.1-5.1c0-1.2,0-2.2,0-3.5c-0.9,0-1.8,0-2.4,0.1c-0.3,0-0.4-0.2-0.1-0.4c1.4-0.8,2.6-1.8,3.7-2.9
    c1.1-1.2,2-2.4,2.9-3.8c0.2-0.3,0.5-0.3,0.5,0.1c-0.1,1.1-0.1,3-0.1,4.3V36c2,0,4,0,4.8,0c0,0.7-0.1,1.5-0.3,2.2
    C72,38.1,70.3,38.1,68.5,38.1z M34.2,48.2c-0.6,0.4-1.6,1-2.3,1.6c-0.7,0.5-1.6,1-2.2,1c-0.6,0-1.6-0.9-2-2.3
    c-1.2,1.1-2.7,2.3-4.6,2.3c-2.4,0-4-1.6-4-3.8c0-0.7,0.2-1.3,0.4-1.5c1.2-0.6,4.7-1.3,8-2.2v-0.7c0-0.8-0.1-1.5-0.2-2.2
    c-0.3-1.3-1.1-2.3-2.8-2.3c-0.3,0-0.7,0.1-1,0.1c0.1,0.5,0.3,1.6,0.3,2.3c0,0.4-0.1,0.9-0.2,1.3c-0.1,0.2-0.4,0.5-0.6,0.6
    c-0.3,0.1-0.5,0.2-0.8,0.2c-1.2,0-2.2-0.7-2.2-1.7c0-0.4,0.2-0.8,0.6-1.3c0.5-0.5,1.8-1.3,2.4-1.7c0.5-0.4,1-0.7,1.5-1.1
    c1.3-0.8,2.3-1.3,3.7-1.3c1.2,0,2.4,0.5,3.1,1.5c0.4,0.7,0.6,1.5,0.7,2.3C32,40,32,40.5,32,41c0,1.2-0.1,2.4-0.1,3.4
    c0,1.4,0.1,2.2,0.5,2.8c0.1,0.2,0.3,0.4,0.5,0.6c0.2,0.1,0.5,0.2,0.7,0.2c0.2,0,0.4,0,0.5,0C34.4,47.9,34.4,48.1,34.2,48.2z
     M27.6,48c-0.1-0.5-0.1-0.9-0.1-1.4c0-0.6,0.1-1.7,0.1-2.6l-0.7,0.2c-2.3,0.5-3.1,1.1-3.1,2.2c0,1.4,1.1,2.2,2.2,2.2h0
    C26.6,48.5,27.1,48.3,27.6,48z M98.8,23.2c-0.6,0.4-1.5,1-2.3,1.6c-0.7,0.5-1.6,1-2.2,1c-0.6,0-1.6-0.9-2-2.3
    c-1.2,1.1-2.7,2.3-4.6,2.3c-2.4,0-4-1.6-4-3.8c0-0.7,0.2-1.3,0.4-1.5c1.2-0.6,4.7-1.3,8-2.2v-0.7c0-0.8-0.1-1.5-0.2-2.2
    c-0.3-1.3-1.1-2.3-2.8-2.3c-0.3,0-0.7,0.1-1,0.1c0.1,0.5,0.3,1.6,0.3,2.3c0,0.4-0.1,0.9-0.2,1.3c-0.1,0.2-0.4,0.5-0.6,0.6
    c-0.3,0.1-0.5,0.2-0.8,0.2c-1.2,0-2.2-0.7-2.2-1.7c0-0.4,0.2-0.8,0.6-1.3c0.5-0.5,1.8-1.3,2.4-1.7c0.5-0.4,1-0.7,1.5-1.1
    c1.3-0.8,2.3-1.3,3.7-1.3c1.3,0,2.4,0.5,3.1,1.5c0.4,0.7,0.6,1.5,0.7,2.3c0.1,0.5,0.1,1,0.1,1.5c0,1.2-0.1,2.4-0.1,3.4
    c0,1.4,0.1,2.2,0.4,2.8c0.1,0.2,0.3,0.4,0.5,0.6c0.2,0.1,0.5,0.2,0.7,0.2c0.2,0,0.4,0,0.5,0C98.9,22.9,99,23.1,98.8,23.2z M92.2,23
    c-0.1-0.5-0.1-0.9-0.1-1.4c0-0.6,0.1-1.7,0.1-2.6l-0.7,0.2c-2.3,0.5-3.1,1.1-3.1,2.2c0,1.4,1.1,2.2,2.2,2.2h0
    C91.2,23.5,91.7,23.3,92.2,23z M43.1,50.2c-0.4-0.1-0.8-0.3-1.1-0.6c-0.3-0.3-0.6-0.7-0.7-1.1c-0.5-1.1-0.6-2.6-0.6-4.1v-1.9
    c0-1.8,0.1-3.9,0.1-4.8c0-0.8,0-1.6-0.1-2.4c0-0.1,0-0.1-0.1-0.2c-0.1-0.1-0.1-0.1-0.2-0.1c-0.5,0-2,0.9-3.2,1.5
    c-1.2,0.7-2.3,1.1-3.2,1.5c-0.3,0.1-0.1,0.4,0.1,0.4c0.2,0,0.4-0.1,0.6-0.1c0.5,0,0.9,0.3,1.2,1c0.3,0.7,0.5,2.1,0.5,4.8
    c0,2.4-0.3,4-0.7,4.9c-0.3,0.6-0.9,1-1.5,1.1c-0.3,0.1-0.3,0.4,0,0.4c0.9,0,2.9-0.1,4.3-0.1c1.4,0,3.6,0.1,4.6,0.1
    C43.4,50.5,43.4,50.3,43.1,50.2z M38.8,28.1c-0.7,0-1.5,0.3-2,0.8C36.3,29.3,36,30,36,30.8l0,0.1c0,1,0.3,1.9,0.8,2.7
    c0,0,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.2,0c0.5-0.4,1.4-0.7,2.2-1.2c1-0.5,1.7-1.2,1.7-2.3c0-0.3,0-0.6-0.1-0.8
    c-0.1-0.3-0.3-0.5-0.5-0.7c-0.2-0.2-0.4-0.3-0.7-0.4C39.4,28.1,39.1,28,38.8,28.1z M5.1,10.2c0,3.3,0,5.9-0.2,8.6
    c-0.2,2.7-1.1,4.1-1.8,4.9c-0.5,0.6-1.2,1.1-2,1.5c-0.2,0.1-0.2,0.4,0,0.4c0.8,0,2.9-0.1,4.5-0.1c1.8,0,4.7,0.1,5.3,0.1
    c0,0,0.1,0,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0-0.1,0-0.1c0,0-0.1-0.1-0.1-0.1c-1.1-0.3-2-0.8-2.8-1.5c-0.9-1-1.7-2.2-1.9-6.6
    c-0.1-1.9-0.1-3.6-0.1-5c0-1,0-2.4,0.1-3.7h0.1c4.7,4.9,10.9,11.8,16.2,17.8c0.3,0.3,0.6,0.2,0.6-0.1c-0.1-1.5-0.2-3.4-0.2-5.1v-4.6
    c0-2.4,0-4.3,0.1-5.4c0-1.1,0.2-2.3,0.5-3.4c0.2-0.8,0.6-1.6,1.1-2.3c0.6-0.8,1.4-1.4,2.4-1.8c0.3-0.1,0.2-0.4,0-0.4
    c-1,0-3.2,0.1-4.8,0.1c-1.5,0-3.9-0.1-5.1-0.1c-0.3,0-0.3,0.3,0,0.4c1.4,0.4,2.6,1.3,3.4,2.6c0.6,1.1,1.2,3,1.3,4.9
    c0.1,1.1,0.1,2.3,0.1,4.1c0,1.3,0,2.4-0.1,3.5c-4.8-5-9.3-9.9-13.6-15.1C8.2,3.2,8.1,3.2,7.9,3.1C7.7,3,7.4,3,7.2,3
    C6.5,3,5.4,3.1,4.1,3.1S1.3,3,0.3,3c-0.3,0-0.3,0.3,0,0.4c1.1,0.2,2.1,0.7,2.9,1.4C4.2,5.7,5.1,7.4,5.1,10.2z M26.5,14.6
    c0.5-0.5,1.8-1.3,2.4-1.7c0.5-0.4,1-0.7,1.5-1.1c1.3-0.8,2.3-1.3,3.7-1.3c1.2,0,2.4,0.5,3.1,1.5c0.4,0.7,0.6,1.5,0.7,2.3
    c0.1,0.5,0.1,1,0.1,1.5c0,1.2-0.1,2.4-0.1,3.4c0,1.4,0.1,2.2,0.5,2.8c0.1,0.2,0.3,0.4,0.5,0.6c0.2,0.1,0.5,0.2,0.7,0.2
    c0.2,0,0.4,0,0.5,0c0.2,0,0.3,0.2,0.1,0.3c-0.6,0.4-1.6,1-2.3,1.6c-0.7,0.5-1.6,1-2.2,1c-0.6,0-1.6-0.9-2-2.3
    c-1.2,1.1-2.7,2.3-4.6,2.3c-2.4,0-4-1.6-4-3.8c0-0.7,0.2-1.3,0.4-1.5c1.2-0.6,4.7-1.3,8-2.2v-0.7c0-0.8-0.1-1.5-0.2-2.2
    c-0.3-1.3-1.1-2.3-2.8-2.3c-0.3,0-0.7,0.1-1,0.1c0.1,0.5,0.3,1.6,0.3,2.3c0,0.4-0.1,0.9-0.2,1.3c-0.1,0.2-0.4,0.5-0.6,0.6
    c-0.3,0.1-0.5,0.2-0.8,0.2c-1.2,0-2.2-0.7-2.2-1.7C25.9,15.4,26.1,15,26.5,14.6z M33.6,23c-0.1-0.5-0.1-0.9-0.1-1.4
    c0-0.6,0.1-1.7,0.1-2.6l-0.7,0.2c-2.3,0.5-3.1,1.1-3.1,2.2c0,1.4,1.1,2.2,2.2,2.2l0,0C32.5,23.5,33.1,23.3,33.6,23z M47.9,25
    c1.1-0.6,2-1.5,2.8-2.4c0.2-0.3-0.1-0.7-0.4-0.4c-0.6,0.7-1.5,1.1-2.4,1.1c-0.8,0-1.4-0.5-1.6-1.5c-0.2-0.9-0.2-2.7-0.2-4.8v-3.9
    c1.9,0,3.5,0,4.5,0c0.2-0.7,0.2-1.5,0.3-2.2c-0.8,0-2.8,0-4.8,0v-0.5c0-1.3,0.1-3.2,0.1-4.3c0-0.3-0.3-0.4-0.5-0.1
    c-0.8,1.4-1.8,2.6-2.9,3.8c-1.1,1.1-2.4,2.1-3.7,2.9c-0.3,0.2-0.2,0.4,0.1,0.4c0.6-0.1,1.5-0.1,2.4-0.1c0,1.3,0,2.3,0,3.5
    c0,1.5-0.1,4.1-0.1,5.1c0,1.4,0.3,2.5,0.9,3.2c0.3,0.3,0.7,0.5,1.1,0.7c0.4,0.2,0.8,0.2,1.3,0.2C45.9,25.9,47,25.5,47.9,25z
     M51.7,13.5c0.2,0,0.3-0.1,0.5-0.1c0.7,0,1.2,0.4,1.3,1.2c0.3,0.8,0.3,2,0.3,4c0,1.4,0,3,0.2,3.9c0.4,2.1,1.6,3.3,3.7,3.3
    c1.9,0,3.8-1.4,5.7-2.9c0,0.9,0.1,1.8,0.3,2.7c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1,0.1,0.2,0.1c0.5,0,1.8-0.5,2.7-1
    c0.9-0.5,2.4-1.2,3.3-1.7c0.2-0.1,0.1-0.4-0.1-0.4c-0.2,0-0.4,0.1-0.5,0.1c-0.5,0-1-0.4-1.2-1c-0.3-0.9-0.4-2.2-0.4-4
    c0-2.2,0-3.9,0.1-5c0-0.7,0.1-1.8,0.1-2.2c0-0.1-0.1-0.2-0.1-0.2c-0.1-0.1-0.2-0.1-0.2-0.1c-0.6,0-2.6,0.9-3.3,1.3
    c-1,0.5-2.1,1-3.2,1.4c0,0,0,0-0.1,0c0,0,0,0-0.1,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0.1,0.1c0,0,0.1,0,0.1,0h0
    c0.1,0,0.2,0,0.3,0c0.8,0,1.3,0.6,1.4,1.3c0.2,0.9,0.3,1.8,0.3,4.2v3.4c-0.7,0.5-1.5,0.8-2.4,0.9c-1.1,0-2-0.4-2.3-1.6
    c-0.3-1.1-0.4-2.6-0.4-4.2c0-1.7,0-4.4,0-4.9c0-1.1-0.1-1.5-0.2-1.8c0-0.1-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.2-0.1
    c-0.6,0-2.4,0.8-3.4,1.3c-1,0.5-2.1,1-2.9,1.4C51.3,13.3,51.4,13.6,51.7,13.5z M80.4,25.2c-1.5-0.2-2.3-1-2.7-1.8
    c-0.5-1.2-0.5-3-0.5-4.6v-1c0-1.6,0.5-2.7,1-3.1c0.1,0,0.3,0,0.4,0c1.1,0,2.3,0.5,3.4,0.5c0.4,0,0.8-0.1,1-0.4
    c0.3-0.3,0.5-0.6,0.5-1c0-0.1,0-0.1,0-0.2c0-1.5-1-3.4-2.3-3.4c-0.7,0-1.2,0.4-1.9,1.1c-0.9,1.1-1.6,2.3-2.2,3.7v-1.9
    c0-1.1,0-2.5-0.2-3c0-0.1-0.2-0.2-0.3-0.2c-0.5,0-2.4,1.1-3.3,1.6c-1.1,0.6-2.2,1.1-3,1.4c-0.3,0.1-0.1,0.4,0.1,0.4
    c0.2,0,0.4-0.1,0.6-0.1c0.5,0,1,0.3,1.3,1.1c0.2,0.6,0.4,1.9,0.4,4.8c0,2.7-0.3,4-0.7,4.8c-0.3,0.5-0.9,0.9-1.5,1.1
    c-0.3,0.1-0.2,0.4,0,0.4c1.5,0,3.3-0.1,4.3-0.1c1.7,0,3.6,0,5.4,0.1C80.6,25.5,80.7,25.2,80.4,25.2z M98,3.4c0.2,0,0.3-0.1,0.5-0.1
    c0.3,0,0.6,0.1,0.8,0.2c0.2,0.2,0.5,0.4,0.6,0.6c0.4,0.8,0.5,2.7,0.5,5c0.1,1.3,0.1,3.1,0.1,4.7v4.6c0,1.2,0,2.2-0.1,2.9
    c0,0.8-0.2,1.6-0.5,2.4c-0.3,0.8-0.9,1.1-1.6,1.3c-0.2,0.1-0.2,0.3,0,0.4c0.4,0,2.6-0.1,4.2-0.1c1.4,0,3.9,0.1,4.7,0.1
    c0.2,0,0.3-0.3,0-0.4c-1.2-0.3-1.7-1.3-2-2.2c-0.2-0.9-0.4-2.6-0.4-5.4c0-5.7,0.1-12.8,0.1-14.8c0-0.8,0-1.6-0.1-2.4
    c0-0.1-0.1-0.3-0.4-0.3c-0.3,0-1.6,0.6-2.8,1.3c-1.5,0.8-3,1.3-3.9,1.7C97.6,3.2,97.8,3.5,98,3.4z M18.6,38.5
    c-0.1,0.1-0.2,0.1-0.4,0.2c-0.2,0.1-0.3,0.2-0.5,0.3l-0.2,0.1l-0.3,0.1c-0.7,0.3-1.5,0.6-2.2,0.8L14.8,40l-0.1,0
    c-0.8,0.2-1.6,0.3-2.4,0.4c-0.9,0.1-1.7,0.2-2.6,0.2V41c0,1.7,0.1,3.3,0.1,4.3c0.1,1.2,0.2,2.2,0.9,3.1c0.8,1.1,2.1,1.6,3.6,1.7h0
    c0.1,0,0.1,0,0.1,0.1c0,0,0,0.1,0,0.2c0,0.1,0,0.1-0.1,0.1c0,0-0.1,0.1-0.2,0c-0.7,0-5.2-0.1-7.1-0.1c-2.1,0-4.8,0.1-5.7,0.1
    c-0.3,0-0.3-0.3,0-0.4c0.9-0.2,1.7-0.7,2.4-1.4c0.7-0.8,1-2.3,1.1-3.9C5,42.9,5,41,5,38.9s-0.1-4.5-0.2-5.7
    c-0.1-1.3-0.3-2.5-1.1-3.4C3,29,2.1,28.5,1.1,28.4c-0.3,0-0.3-0.4,0-0.4c0.9,0,3.3,0.1,5,0.1c1.6,0,4-0.1,6.1-0.1
    c3.5,0,5.3,0.5,6.6,1.2c1.5,0.8,2.6,2.3,2.6,4.3C21.5,35.7,20.4,37.4,18.6,38.5z M16.3,33.7c-0.2-1.2-0.7-2.4-1.5-3.3
    c-0.8-0.9-2-1.4-3.2-1.5c-0.5,0-1,0-1.6,0.1c-0.3,2.2-0.4,6.5-0.4,9.4l0,1.7c3-0.1,4.8-1,6-2.8C16.3,36.2,16.5,34.9,16.3,33.7z
     M61,49.1c-0.4-0.5-0.5-1.3-0.6-2.2c-0.1-1-0.2-2.5-0.2-4.1c0-1.4,0-2.9-0.2-3.9c-0.3-2.2-1.5-3.3-3.6-3.3c-1.8,0-3.7,1.3-5.7,2.9
    V38c0-0.9,0-1.8-0.1-2.6c0-0.1-0.2-0.2-0.3-0.2c-0.5,0-1.8,0.7-2.8,1.3c-1.1,0.6-2.3,1.2-3.5,1.7c-0.3,0.1-0.2,0.4,0.1,0.4
    c0.2,0,0.3-0.1,0.5-0.1c0.3,0,0.6,0.1,0.8,0.3s0.4,0.4,0.5,0.7c0.3,0.9,0.4,2.3,0.4,4.1c0,1.2,0,2.2-0.1,2.9c0,0.8-0.2,1.6-0.5,2.4
    c-0.3,0.8-0.9,1.1-1.6,1.3c-0.3,0.1-0.2,0.3,0,0.4c0.4,0,3.3-0.1,4.2-0.1c1,0,3.9,0.1,4.7,0.1c0.3,0,0.3-0.3,0-0.4
    c-1.2-0.3-1.7-1.3-1.9-2.2c-0.3-0.9-0.4-2.6-0.4-5.4v-3.5c0.7-0.5,1.5-0.9,2.3-0.9c1.2,0,2.1,0.5,2.4,1.7c0.3,1.2,0.4,2.6,0.4,4
    c0,1.5,0,3.1-0.4,4.4c-0.1,0.4-0.3,0.8-0.6,1.1s-0.6,0.6-1,0.8l0,0.4c1.1,0,2.9-0.1,4.4-0.1c1.6,0,3.1,0.1,4.5,0.1l0-0.4
    C61.9,50,61.4,49.7,61,49.1z M95.3,46c-1,1.4-2.5,2.3-4.2,2.3c-0.6,0-1.2-0.1-1.8-0.3c-0.6-0.2-1.1-0.6-1.5-1
    c-0.8-1-1.3-2.4-1.3-4.2c0-3.4,0.7-5.9,2.2-6.6c0.7,0.1,1.3,1,1.7,2c0.8,1.9,1.4,2.6,2.5,2.6c0.6,0,1.1-0.3,1.5-0.7
    c0.4-0.4,0.6-1,0.6-1.6c0-1-0.9-1.8-2.3-2.4c-1.2-0.4-2.5-0.6-3.8-0.6c-4.5,0-7.5,3.6-7.5,7.7c0,2.5,0.8,4.5,2.2,5.8
    c1.4,1.3,3.1,1.8,5.1,1.8c3.3,0,5.7-2.6,6.8-4.5C95.9,46,95.6,45.7,95.3,46z M113,43.2c0,2.7-1.5,5.2-4,6.6
    c-1.2,0.7-2.6,1.1-3.9,1.1c-2.1,0-4.1-0.6-5.7-1.9c-0.8-0.7-1.5-1.5-1.9-2.5c-0.4-1-0.7-2-0.6-3.1c0-1.3,0.3-2.6,1-3.8
    c0.7-1.2,1.6-2.1,2.8-2.8c1.3-0.8,3.1-1.2,4.6-1.2c1.9,0,3.8,0.7,5.3,1.9C112.1,38.8,113,40.8,113,43.2z M108,43.8
    c0-4.1-1.4-7.3-3.4-7.5c-1.8,0.5-2.7,3.2-2.7,6.3c0,4,1.4,7,3.6,7.7C107,49.8,108,46.9,108,43.8z M115.7,46.2
    c-1.4,0-2.5,0.9-2.5,2.4c0,1.2,0.8,2.1,2.1,2.1c1.4,0,2.5-0.9,2.5-2.4C117.8,47.1,117,46.2,115.7,46.2z"
                ></path>
              </svg>
            </Link>
          </NavbarLogo>
          <NavbarLinksWrapper>
            <NavbarLinkUppercase>
              Shop
              <NavbarLinkArrow src={Arrow} />
            </NavbarLinkUppercase>
            <NavbarLinkUppercase>Colours</NavbarLinkUppercase>
            <NavbarLinkUppercase>
              Our Difference
              <NavbarLinkArrow src={Arrow} />
            </NavbarLinkUppercase>
          </NavbarLinksWrapper>
          <NavbarLinksWrapperSmallGap>
            <NavbarLink>
              <NavbarLinkIcon src={Heart} />
            </NavbarLink>
            <NavbarLink>Login</NavbarLink>
            <NavbarLink>Calculator</NavbarLink>
            <NavbarLink>Chat</NavbarLink>
            <NavbarLink>
              <svg viewBox="0 0 44 44" className="w-full h-full fill-current">
                <path d="M37.8 14.7C37.2 6.5 30.3 0 22 0S6.8 6.5 6.2 14.7h-5V44h41.6V14.7h-5zM22 2.4c7 0 12.8 5.4 13.4 12.2H8.6C9.2 7.8 15 2.4 22 2.4zm18.3 39.2H3.7V17.1h36.7v24.5z"></path>
              </svg>
              0
            </NavbarLink>
          </NavbarLinksWrapperSmallGap>
        </MainNavbar>
      </NavbarWrapper>
      <NavbarPopup />
    </>
  );
};

const NavbarWrapper = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  left: 0;
  top: ${(props) => (props.visible ? "0" : "-20%")};
  overflow: hidden;
  z-index: 3;
  transition: ${variables.transitionMain};
`;

const PreNavbar = styled.div`
  width: 100%;
  height: ${variables.sizeLarge};
  padding: ${variables.sizeSmall} ${variables.sizeMediumSmall};
  background-color: black;
  transform: translateX(
    ${(props) => {
      return props.bannerVisible ? "" : "-100vw";
    }}
  );
  visibility: ${(props) => (props.bannerVisible ? "visible" : "hidden")};
  transition: ${variables.transitionMain};
`;

const PreNavbarText = styled(TextMedium)`
  font-weight: 600;
  color: ${colorTheme.secondary};
`;

const PreNavbarButton = styled.div`
  width: ${variables.sizeMediumSmall};
  height: ${variables.sizeMediumSmall};
  cursor: pointer;
  transition: ${variables.transitionMain};

  svg {
    fill: white;
  }

  :hover {
    transform: scale(1.3) rotate(90deg);
  }
`;

const MainNavbar = styled.div`
  width: 100%;
  background-color: ${colorTheme.primary};
  padding: ${variables.sizeExtraMedium} ${variables.sizeExtraLarge};
  transform: translateY(
    ${(props) => (props.bannerVisible ? "0" : `-${variables.sizeLarge}`)}
  );
  transition: ${variables.transitionMain};
`;

const NavbarLogo = styled.div`
  width: 7%;
  cursor: pointer;
  transition: ${variables.transitionMain};

  :hover {
    opacity: 0.75;
  }
`;

const NavbarLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${variables.sizeExtraLarge};
  pointer-events: none;

  > p {
    pointer-events: auto;
  }

  :hover > p {
    opacity: 1;
  }

  :hover > p:not(:hover) {
    opacity: 0.75;
  }
`;

const NavbarLinksWrapperSmallGap = styled.div`
  display: flex;
  align-items: center;
  gap: ${variables.sizeExtraMedium};
`;

const NavbarLinkUppercase = styled(TextMedium)`
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 0.7px;
  display: flex;
  align-items: center;
  gap: ${variables.sizeSmall};
  transition: ${variables.transitionMain};

  :hover {
    letter-spacing: 1.5px;
  }
`;

const NavbarLinkArrow = styled.img`
  width: ${variables.sizeSmall};
  height: ${variables.sizeSmall};
  transform: translateY(-2px);
`;

const NavbarLink = styled(BodyMain)`
  cursor: pointer;
  transition: ${variables.transitionMain};
  display: flex;
  align-items: center;
  gap: ${variables.sizeSmall};

  :hover {
    opacity: 0.75;
  }

  svg {
    width: ${variables.sizeExtraMedium};
    transform: translateY(-2px);
  }
`;

const NavbarLinkIcon = styled.img`
  width: ${variables.sizeExtraMedium};
  height: ${variables.sizeExtraMedium};
`;
