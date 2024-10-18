<<<<<<< HEAD

import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { journalSlice } from './journal';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: journalSlice.reducer,
=======
import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth';

export const store = configureStore({
  reducer: {
    auth : authSlice.reducer
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
  },
});