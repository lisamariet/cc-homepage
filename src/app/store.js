import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/weather/weatherSlice';
import goalsReducer from '../features/goals/goalsSlice';
import imagesReducer from '../features/images/imagesSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    goals: goalsReducer,
    images: imagesReducer
  }
});
