import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AuthForm } from '../shared/auth-form/AuthForm';
import {
  selectIsLogged, selectIsPending, handleLogin
} from '../features/auth/auth';
import './login.scss';

export const Login: FC = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector(selectIsLogged);
  const isPending = useSelector(selectIsPending);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);

  const handleUsername = (text: string) => setUsername(text);
  const handlePassword = (text: string) => setPassword(text);
  const login = () => {
    dispatch(handleLogin({ username, password }));
    setIsInitialized(true);
  };

  return <AuthForm
    username={username}
    password={password}
    handleUsername={handleUsername}
    handlePassword={handlePassword}
  >
    {isInitialized && !isLogged && !isPending && (
      <span className="login-error">Failed to login</span>
    )}
    <input
      className="login-button"
      onClick={login}
      value="Log in"
      type="submit"
      disabled={isPending}
    />
  </AuthForm>
};
