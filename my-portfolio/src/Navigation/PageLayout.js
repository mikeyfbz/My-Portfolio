import React from "react";
import styled from "styled-components";
import NavHeader from "./NavHeader";
import Footer from "./Footer";

const Wrapper = styled.div`
  background-color: #708090;
  height: 100vh;
  width: 100vw;
`;

const PageLayout = ({ children }) => {
  return (
    <Wrapper>
      <NavHeader />
      {children}
      {/* <Footer /> */}
    </Wrapper>
  );
};

export default PageLayout;
