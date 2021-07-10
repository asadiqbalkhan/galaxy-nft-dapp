import React, { useState, useEffect } from "react";
import Modal, { ModalProvider } from "styled-react-modal";
import {
  StyedModal,
  ButtonWrapper,
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  Column2,
  TopLine,
  TextWrapper,
  Heading,
  ImgWrap,
} from "./AboutElements";
import { Button } from "../ButtonElement";
import { FancyModalButton, FadingBackground } from "./Modal";
import { ReactComponent as Image } from "../../images/tomoon.svg";

const About = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav, []);
  });

  return (
    <AboutContainer id="about" scrollNav={scrollNav}>
      <AboutWrapper>
        <AboutRow>
          <Column1>
            <TextWrapper>
              <TopLine>Create Your Own Decentralized Universe</TopLine>
              <Heading>Road to NFT</Heading>
            </TextWrapper>
            <ButtonWrapper>
              <Button
                to="nft"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={80}
              >
                Create Galaxy
              </Button>
              <Button
                to="collection"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={80}
              >
                View Collection
              </Button>
            </ButtonWrapper>
          </Column1>
          <Column2>
            {/* Testing Modal Functionality STARTS  HERE*/}
            {/* <ModalProvider backgroundComponent={FadingBackground}>
              <div className="App">
                <h1>Hello styled-react-modal</h1>

                <FancyModalButton />
              </div>
            </ModalProvider> */}
            {/* Testing Modal Functionality ENDS HERE */}
            <ImgWrap>
              <Image width="400px" height="400px" />
            </ImgWrap>
          </Column2>
        </AboutRow>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
