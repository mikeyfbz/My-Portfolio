import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 40px;
    background: linear-gradient(90deg, #0089ee 10%, #708090 100%);
    border-top: 1px solid black;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    align-items: center;
    padding: 20px;
`;

const Footer = () => {
    return (
        <Wrapper>
            footer
        </Wrapper>
    )
};

export default Footer;
