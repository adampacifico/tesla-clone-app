import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        imgURL="/images/model-s.jpg"
        btnRightText="Existing Inventory"
        btnLeftText="Custom Order"
        description="Order Online for Touchless Delivery"
      />
      <Section
        title="Model Y"
        imgURL="/images/model-y.jpg"
        btnRightText="Existing Inventory"
        btnLeftText="Custom Order"
        description="Order Online for Touchless Delivery"
      />
      <Section
        title="Model 3"
        imgURL="/images/model-3.jpg"
        btnRightText="Existing Inventory"
        btnLeftText="Custom Order"
        description="Order Online for Touchless Delivery"
      />
      <Section
        title="Model X"
        imgURL="/images/model-x.jpg"
        btnRightText="Existing Inventory"
        btnLeftText="Custom Order"
        description="Order Online for Touchless Delivery"
      />
      <Section
        title="Low Cost Solar Panels in America"
        imgURL="/images/solar-panel.jpg"
        btnRightText="Learn more"
        btnLeftText="Order Now"
        description="Money-back guarantee"
      />
        <Section
        title="Accessories"
        imgURL="/images/accessories.jpg"
        btnLeftText="Show Now"
        showFooter
      />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  overflow-x: hidden;
`;
export default Home;
