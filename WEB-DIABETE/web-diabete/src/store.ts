import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authReducer } from 'features/auth/auth';
import { searchReducer } from 'features/search/search';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
