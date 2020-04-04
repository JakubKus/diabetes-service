import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE } from '../../shared/local-storage';
import { AuthState, Credentials } from './auth-models';
import { loginUser } from './loginUser';
import { Dispatch } from 'react';

const { LOGIN_TOKEN } = LOCAL_STORAGE;

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: !!localStorage.getItem(LOGIN_TOKEN),
    isPending: false,
  } as AuthState,
  reducers: {
    requestLogin: state => {
      state.isPending = true;
      state.isLogged = false;
    },
    handleLogin: (state: AuthState, action: PayloadAction<string>) => {
      state.isPending = false;
      state.isLogged = true;
      localStorage.setItem(LOGIN_TOKEN, action.payload);
    },
    loginError: state => {
      state.isPending = false;
      state.isLogged = false;
    }
  },
});

export const authReducer = authSlice.reducer;
const { requestLogin, handleLogin, loginError } = authSlice.actions;

export const selectIsLogged = (state: { auth: AuthState }) =>
  state.auth.isLogged;
export const selectIsPending = (state: { auth: AuthState }) =>
  state.auth.isPending;

export const handleLoginUser = (credentials: Credentials) =>
  (dispatch: Dispatch<PayloadAction>) => {
    dispatch(requestLogin());

    return loginUser(credentials)
      .then(x => {
        if (x.ok) return x.json();
        else {
          dispatch(loginError());
          return Promise.reject('Wrong username or password');
        }
      })
      .then(x => dispatch(handleLogin(x.token)))
      .catch(x => console.log(x));
  };
