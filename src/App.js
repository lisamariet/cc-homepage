import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import GoalContainer from './components/Goals/GoalContainer';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: var(--background);
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Hero />
      <MainContent>
        <GoalContainer />
      </MainContent>
    </AppContainer>
  );
}

export default App;
