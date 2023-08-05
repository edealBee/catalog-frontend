import { configureStore } from '@reduxjs/toolkit';
import GeneralSlice from './Slices/GeneralSlice';

export const store = configureStore({
  reducer: {
    general: GeneralSlice,
  },
});
