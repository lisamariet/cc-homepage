import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`;

const GoalItem = ({ goal }) => {
  return (
    <Item>
      <Checkbox 
        type="checkbox" 
        checked={goal.completed}
        onChange={() => {/* Toggle completion */}}
      />
      <span style={{ 
        textDecoration: goal.completed ? 'line-through' : 'none' 
      }}>
        {goal.text}
      </span>
      <button onClick={() => {/* Delete goal */}}>Slett</button>
    </Item>
  );
};

export default GoalItem; 