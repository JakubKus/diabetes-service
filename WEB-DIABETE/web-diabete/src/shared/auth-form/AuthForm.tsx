import React, { FC } from 'react';
import { AuthFormModel } from './auth-form-model';
import './auth-form.scss';

export const AuthForm: FC<AuthFormModel> = props => {
  return <form className="auth auth-form" onSubmit={e => e.preventDefault()}>
    <label className="auth-label">
      <span className="auth-label__text">Username</span>
      <input
        className="auth-label__input"
        value={props.username}
        onChange={e => props.handleUsername(e.target.value)}
      />
    </label>
    <label className="auth-label">
      <span className="auth-label__text">Password</span>
      <input
        className="auth-label__input"
        value={props.password}
        onChange={e => props.handlePassword(e.target.value)}
        type="password"
      />
    </label>
    {props.children}
  </form>
};

AuthForm.defaultProps = {
  password: '',
  username: ''
} as AuthFormModel;
