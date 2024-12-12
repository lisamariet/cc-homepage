import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GoalItem from './GoalItem';
import { selectActiveGoals, selectCompletedGoals } from '../../features/goals/goalsSlice';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const EmptyState = styled.p`
  text-align: center;
  color: #666;
  font-style: italic;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`;

const GoalList = ({ type }) => {
  const activeGoals = useSelector(selectActiveGoals);
  const completedGoals = useSelector(selectCompletedGoals);
  
  const goals = type === 'completed' ? completedGoals : activeGoals;
  const emptyMessage = type === 'completed' 
    ? 'Ingen fullførte oppgaver ennå' 
    : 'Legg til din første oppgave for dagen!';

  if (goals.length === 0) {
    return <EmptyState>{emptyMessage}</EmptyState>;
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