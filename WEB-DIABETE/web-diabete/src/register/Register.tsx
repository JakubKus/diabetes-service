import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AuthForm } from '../shared/auth-form/AuthForm';
import {
  selectIsLogged, selectIsPending, handleRegister
} from '../features/auth/auth';
import './register.scss';

export const Register: FC = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector(selectIsLogged);
  const isPending = useSelector(selectIsPending);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);

  const handleUsername = (text: string) => setUsername(text);
  const handlePassword = (text: string) => setPassword(text);
  const register = () => {
    dispatch(handleRegister({ username, password }));
    setIsInitialized(true);
  };

  return <AuthForm
    username={username}
    password={password}
    handleUsername={handleUsername}
    handlePassword={handlePassword}
  >
    {isInitialized && !isLogged && !isPending && (
      <span className="register-error">Failed to register</span>
    )}
    <input
      className="register-button"
      onClick={register}
      value="Register"
      type="submit"
      disabled={isPending}
    />
  </AuthForm>
};
