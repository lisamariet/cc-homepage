import React from 'react';
import styled from 'styled-components';
import GoalInput from './GoalInput';
import GoalList from './GoalList';

const Container = styled.section`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: var(--text);
  margin-top: 0;
  margin-bottom: 1.5rem;
`;

const GoalContainer = () => {
  return (
    <Container>
      <Title>Dagens Mål</Title>
      <GoalInput />
      <GoalList />
    </Container>
  );
};

export default GoalContainer; 