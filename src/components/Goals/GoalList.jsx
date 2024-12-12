import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GoalItem from './GoalItem';
import { selectAllGoals } from '../../features/goals/goalsSlice';

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const EmptyState = styled.p`
  text-align: center;
  color: #666;
  font-style: italic;
`;

const GoalList = () => {
  const goals = useSelector(selectAllGoals);

  if (goals.length === 0) {
    return <EmptyState>Ingen mål lagt til ennå. Start med å legge til ditt første mål!</EmptyState>;
  }

  return (
    <List>
      {goals.map(goal => (
        <GoalItem key={goal.id} goal={goal} />
      ))}
    </List>
  );
};

export default GoalList; 