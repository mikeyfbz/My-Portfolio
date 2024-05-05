import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
    height: 32px;
    background-color: blue;
    color: yellow;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    padding: 8px 15px;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
`;

const NavButton = ({ text, link }) => {
    return (
        <StyledButton href={link}>{text}</StyledButton>
    )
};

export default NavButton;
