import React from 'react';
import styled from 'styled-components';
import GoalInput from './GoalInput';
import GoalList from './GoalList';

const Container = styled.section`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h2`
  color: var(--text);
  margin-top: 0;
  margin-bottom: 2rem;
  font-size: 1.8rem;
`;

const GoalsWrapper = styled.div`
  display: grid;
  gap: 2rem;
`;

const Section = styled.div`
  h3 {
    color: var(--text);
    font-size: 1.2rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    span {
      font-size: 0.9rem;
      color: #666;
      font-weight: normal;
    }
  }
`;

const GoalContainer = () => {
  return (
    <Container>
      <Title>Dagens planer</Title>
      <GoalInput />
      <GoalsWrapper>
        <Section>
          <h3>Aktive oppgaver <span>(trykk for å fullføre)</span></h3>
          <GoalList type="active" />
        </Section>
        <Section>
          <h3>Fullførte oppgaver</h3>
          <GoalList type="completed" />
        </Section>
      </GoalsWrapper>
    </Container>
  );
};

export default GoalContainer; 