import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Foot>
      <FootList>
          <li>Tesla © 2021</li>
          <li>Privay & Legal</li>
          <li>Contact</li>
          <li>Careers</li>
          <li>Get Newsletter</li>
          <li>News</li>
          <li>Forums</li>
          <li>Locations</li>
      </FootList>
      <Author>
        <p>coded by : Adam Pacifico</p>
      </Author>
    </Foot>
  );
};

const Foot = styled.footer`
    position: absolute;
    bottom:0;
    right:0;
    left:0;
`;
const FootList = styled.ul`
    display: flex;
    width: 100%;
    justify-content: center;
    padding:0 75px;
    list-style-type: none;
    font-size: 0.85rem;
    li{
        padding: 0 10px;
    }
`;
const Author = styled.div`
    padding: 8px 0;
    width: 100%;
    font-size: 12px;
`

export default Footer;
