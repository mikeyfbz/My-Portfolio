import React from 'react';
import styled from 'styled-components';
import PageLayout from './Navigation/PageLayout';

const PageWrapper = styled.div`
  background-color: #708090;
  height: 100vh;
  width: 100vw;
`;

const Header = styled.div`
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  padding-top: 40px;
`;

const SubHeader = styled.div`
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding-top: 40px;
`;

function App() {
  return (
    <PageWrapper>
      <PageLayout>
        <Header>Mikey's Portfolio</Header>
        <SubHeader>Here you can find my projects, bio and anything else I can think to add.</SubHeader>
      </PageLayout>
    </PageWrapper>
  );
}

export default App;
