import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Footer from './Footer'

const Section = ({ showFooter, title, description, imgURL, btnRightText, btnLeftText }) => {
  return (
    <Wrap bgImage={imgURL}>
      <Fade ssrFadeout bottom>
        <Itemtext>
          <h1>{title}</h1>
          <p>{description}</p>
        </Itemtext>
      </Fade>
      <Fade ssrFadeout bottom>
        <Buttons>
          <ButtonGroup>
            <ButtonLeft>{btnLeftText}</ButtonLeft>
            {btnRightText ? <ButtonRight>{btnRightText}</ButtonRight> : ""}
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg"></DownArrow>
        </Buttons>
      </Fade>
      {showFooter && <Footer />}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url("${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const Itemtext = styled.div`
  padding-top: 15vh;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    letter-spacing: 1.5px;
    font-weight: normal;
  }
  p {
    opacity: 0.7;
    font-size: 1rem;
  }
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 5vh;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ButtonLeft = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const ButtonRight = styled(ButtonLeft)`
  background-color: white;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  width: 40px;
  animation: animateDown infinite 1.5s;
  margin-bottom: 15px;
`;
const Buttons = styled.div``;
export default Section;
