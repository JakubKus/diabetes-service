import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE } from 'shared/local-storage';
import { AppThunk } from 'store';
import { AuthState, Credentials } from './auth-models';
import { loginUser } from './loginUser';
import { registerUser } from './registerUser';

const { LOGIN_TOKEN } = LOCAL_STORAGE;

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: !!localStorage.getItem(LOGIN_TOKEN),
    isPending: false,
  } as AuthState,
  reducers: {
    _requestLogin: state => {
      state.isPending = true;
      state.isLogged = false;
    },
    _handleLogin: (state: AuthState, action: PayloadAction<string>) => {
      state.isPending = false;
      state.isLogged = true;
      localStorage.setItem(LOGIN_TOKEN, action.payload);
    },
    _loginError: state => {
      state.isPending = false;
      state.isLogged = false;
    },
    _requestRegister: state => {
      state.isPending = true;
    },
    _registrationError: state => {
      state.isPending = false;
    },
    _logoutUser: state => {
      localStorage.removeItem(LOGIN_TOKEN);
      state.isLogged = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const selectIsLogged = (state: { auth: AuthState }) => state.auth.isLogged;
export const selectIsPending = (state: { auth: AuthState }) => state.auth.isPending;

const {
  _requestLogin, _handleLogin, _loginError, _requestRegister, _registrationError, _logoutUser,
} = authSlice.actions;

export const handleLogin = (credentials: Credentials): AppThunk => async dispatch => {
  dispatch(_requestLogin());
  try {
    const loginToken = await loginUser(credentials);
    dispatch(_handleLogin(loginToken.data.token));
  } catch (e) {
    console.error(new Error(e).message);
    dispatch(_loginError());
  }
};

export const handleRegister = (credentials: Credentials): AppThunk => async dispatch => {
  dispatch(_requestRegister());
  try {
    await registerUser(credentials);
    dispatch(handleLogin(credentials));
  } catch (e) {
    console.error(new Error(e).message);
    dispatch(_registrationError());
  }
};

export const handleLogout = (): AppThunk => async dispatch => dispatch(_logoutUser());
