import React, { useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Header = () => {
  const [isClick, setIsClick] = useState(false);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <MenuList>
        <Menu>
          <a href="">Model S</a>
        </Menu>
        <Menu>
          <a href="">Model 3</a>
        </Menu>
        <Menu>
          <a href="">Model X</a>
        </Menu>
        <Menu>
          <a href="">Model Y</a>
        </Menu>
        <Menu>
          <a href="">Solar Roof</a>
        </Menu>
        <Menu>
          <a href="">Solar Panels</a>
        </Menu>
      </MenuList>
      <RightMenu>
        <a href="">Shop</a>
        <a href="">Tesla Account</a>

        <i onClick={() => setIsClick(!isClick)} className="fa fa-bars"></i>
      </RightMenu>
      <SideBar show={isClick} onClick={() => setIsClick(!isClick)}>
        <i onClick={() => setIsClick(!isClick)} className="fa fa-times"></i>
      </SideBar>
      <SideBarContent show={isClick}>
        <li>Existing inventory</li>
        <li>used inventory</li>
        <li>trade-in</li>
        <li>cybertruck</li>
        <li>roadster</li>
        <li>semi</li>
        <li>charging</li>
        <li>powerwall</li>
        <li>commercial energy</li>
        <li>utilities</li>
        <li>test drive</li>
        <li>find us</li>
        <li>support</li>
        <li>united states</li>
      </SideBarContent>
    </Container>
  );
};

const Container = styled.div`
  min-height: 50px;
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  font-size: 15px;
  word-spacing: 2px;
  padding: 0 30px;
  a {
    text-align: left;
    flex: 25%;
    @media (max-width: 1200px) {
      width: fit-content;
    }
    img {
      height: 22px;
      object-fit: contain;
    }
  }
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  padding: 0;
  flex: 50%;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const Menu = styled.li`
  padding-right: 10px;

  a {
    text-decoration: none;
    color: black;
    text-transform: uppercase;

    &:hover {
      color: white;
    }
  }
`;
const RightMenu = styled.div`
  text-align: right;
  flex: 25%;
  a {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    padding-left: 10px;
    @media (max-width: 1200px) {
      display: none;
    }
  }
  i {
    font-size: 1.1rem;
    padding-left: 10px;
    cursor: pointer;
  }
`;
const SideBar = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
  width: 100vw;
  position: absolute;
  inset: 0;
  display: ${(props) => (props.show ? "block" : "none")};
  i {
    position: fixed;
    height: 50px;
    right: 30px;
    display: flex;
    align-items: center;
    z-index: 10000;
    font-size: 1.1rem;
    cursor: pointer;
  }
`;

const SideBarContent = styled.ul`
  padding: 50px 30px 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;

  position: fixed;
  top: 0;
  right: 0; // ${(props) => (props.show ? "0" : "-350px")};
  bottom: 0;
  z-index: 1000;
  width: 350px;
  background: white;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(350px)")};
  transition: transform 0.2s ease-in;
  li {
    padding: 20px 0;
    text-transform: uppercase;
    font-size: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    width: 100%;
  }
  @media (max-width: 426px) {
    max-width: 320px;;
    text-align: center;
  }
`;

export default Header;
