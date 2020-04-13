import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE } from '../../shared/local-storage';
import { AuthState, Credentials } from './auth-models';
import { loginUser } from './loginUser';
import { AppThunk } from '../../store';
import { registerUser } from './registerUser';

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
    },
    requestRegister: state => {
      state.isPending = true;
    },
    registrationError: state => {
      state.isPending = false;
    },
    logoutUser: state => {
      localStorage.removeItem(LOGIN_TOKEN);
      state.isLogged = false;
    }
  },
});

export const authReducer = authSlice.reducer;
const {
  requestLogin,
  handleLogin,
  loginError,
  requestRegister,
  registrationError,
  logoutUser
} = authSlice.actions;

export const selectIsLogged = (state: { auth: AuthState }) =>
  state.auth.isLogged;
export const selectIsPending = (state: { auth: AuthState }) =>
  state.auth.isPending;

export const handleLoginUser = (credentials: Credentials): AppThunk =>
  async dispatch => {
    dispatch(requestLogin());
    try {
      const loginToken = await loginUser(credentials);
      dispatch(handleLogin(loginToken.data.token));
    } catch (e) {
      console.error(new Error(e).message);
      dispatch(loginError());
    }
  };

export const handleRegisterUser = (credentials: Credentials): AppThunk =>
  async dispatch => {
    dispatch(requestRegister());
    try {
      await registerUser(credentials);
      dispatch(handleLoginUser(credentials));
    } catch (e) {
      console.error(new Error(e).message);
      dispatch(registrationError());
    }
  };

export const handleLogoutUser = (): AppThunk => async dispatch =>
  dispatch(logoutUser());
