import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  goals: [],
  status: 'idle',
  error: null
};

const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    addGoal: (state, action) => {
      state.goals.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
        createdAt: new Date().toISOString()
      });
    },
    toggleGoal: (state, action) => {
      const goal = state.goals.find(goal => goal.id === action.payload);
      if (goal) {
        goal.completed = !goal.completed;
      }
    },
    deleteGoal: (state, action) => {
      state.goals = state.goals.filter(goal => goal.id !== action.payload);
    },
    clearCompletedGoals: (state) => {
      state.goals = state.goals.filter(goal => !goal.completed);
    }
  }
});

// Action creators
export const { addGoal, toggleGoal, deleteGoal, clearCompletedGoals } = goalsSlice.actions;

// Selectors
export const selectAllGoals = (state) => state.goals.goals;
export const selectActiveGoals = (state) => state.goals.goals.filter(goal => !goal.completed);
export const selectCompletedGoals = (state) => state.goals.goals.filter(goal => goal.completed);

export default goalsSlice.reducer; 