import React, { FC } from 'react';
import { ReactComponent as HomeLogo } from '../shared/icons/home.svg';
import './nav.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../shared/routes';

export const Nav: FC = () => {
  return <nav className="nav nav-bar">
    <HomeLogo className="nav-logo" />
    <div className="nav-links">
      <Link className="nav-links__link" to={ROUTES.LOGIN}>Login</Link>
      <Link
        className="nav-links__link nav-links__link--bold"
        to={ROUTES.REGISTER}
      >
        Register
      </Link>
    </div>
  </nav>;
};
