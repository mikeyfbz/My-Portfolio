import React from 'react';
import styled from 'styled-components';
import PageLayout from '../components/PageLayout';
import { Header, SubHeader } from '../components/StyledComponents/commonComponents';

const PageWrapper = styled.div`
  background-color: #708090;
  height: 100vh;
  width: 100vw;
`;
const Root = () => {
    return (
    <PageWrapper>
      <PageLayout>
        <Header>My Portfolio</Header>
        <SubHeader>This is my portfolio. You will find links to my projects, bio and more.</SubHeader>
      </PageLayout>
    </PageWrapper>
    )
};

export default Root;
