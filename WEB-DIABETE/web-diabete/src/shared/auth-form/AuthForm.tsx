import React, { FC } from 'react';
import { AuthFormModel } from './auth-form-model';
import './auth-form.scss';

export const AuthForm: FC<AuthFormModel> = props =>
  <form className="authForm" onSubmit={e => e.preventDefault()}>
    <label className="authForm-label">
      <span className="authForm-label__text">Username</span>
      <input
        className="authForm-label__input"
        value={props.username}
        onChange={e => props.handleUsername(e.target.value)}
      />
    </label>
    <label className="authForm-label">
      <span className="authForm-label__text">Password</span>
      <input
        className="authForm-label__input"
        value={props.password}
        onChange={e => props.handlePassword(e.target.value)}
        type="password"
      />
    </label>
    {props.children}
  </form>

AuthForm.defaultProps = {
  password: '',
  username: ''
} as AuthFormModel;
