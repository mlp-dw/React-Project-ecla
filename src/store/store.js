import { configureStore } from '@reduxjs/toolkit';
import quizzReducer from '../reducers/quizzSlice';

export const store = configureStore({
  reducer: {
    quizz: quizzReducer,
  },
})