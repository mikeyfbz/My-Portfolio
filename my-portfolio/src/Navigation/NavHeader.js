import React from "react";
import styled from "styled-components";
import NavButton from "../components/NavButton";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #708090;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0 20px;
`;

const NavHeader = () => {
  return (
    <Wrapper>
        <NavButton text="Home" link="/" />
        <NavButton text="Projects" link="/projects" />
        <NavButton text="Details" link="/bio" />
    </Wrapper>
  );
};

export default NavHeader;
