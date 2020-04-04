import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authReducer } from './features/auth/auth';

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
