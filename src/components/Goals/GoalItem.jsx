import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { toggleGoal, deleteGoal } from '../../features/goals/goalsSlice';

const Card = styled.div`
  position: relative;
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #eee;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  ${props => props.$completed && `
    background: #f8f8f8;
    border-color: #ddd;
  `}
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Text = styled.p`
  margin: 0;
  font-size: 1rem;
  color: var(--text);
  ${props => props.$completed && `
    text-decoration: line-through;
    color: #666;
  `}
`;

const Actions = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0.25rem;
  
  &:hover {
    color: var(--primary);
  }
`;

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  return (
    <Card 
      $completed={goal.completed}
      onClick={() => dispatch(toggleGoal(goal.id))}
    >
      <Content>
        <Text $completed={goal.completed}>{goal.text}</Text>
      </Content>
      <Actions>
        <Button 
          onClick={(e) => {
            e.stopPropagation();
            dispatch(deleteGoal(goal.id));
          }}
          title="Slett mål"
        >
          🗑️
        </Button>
      </Actions>
    </Card>
  );
};

export default GoalItem; 