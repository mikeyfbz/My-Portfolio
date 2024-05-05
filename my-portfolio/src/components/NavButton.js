import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
    height: 32px;
    width: 120px;
    background-color: #0089ee;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    padding: 8px 15px;
    border-radius: 10px;
    border: 1px solid transparent;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        border: 1px solid white;
        background-color: #40a9f6;
        font-weight: bold;
        height: 40px;
        width: 130px;
    }
`;

const NavButton = ({ text, link }) => {
    return (
        <StyledButton href={link}>{text}</StyledButton>
    )
};

export default NavButton;
