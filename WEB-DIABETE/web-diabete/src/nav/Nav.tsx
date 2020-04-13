import React, { FC } from 'react';
import { ReactComponent as HomeLogo } from '../shared/icons/home.svg';
import './nav.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../shared/routes';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogged, handleLogoutUser } from '../features/auth/auth';

export const Nav: FC = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectIsLogged);
  const logout = () => dispatch(handleLogoutUser());

  const authLinks = <>
    <Link className="nav-links__link" to={ROUTES.LOGIN}>Login</Link>
    <Link
      className="nav-links__link nav-links__link--bold"
      to={ROUTES.REGISTER}
    >
      Register
    </Link>
  </>;

  const productsLinks = <>
    <Link className="nav-links" to="/" onClick={logout}>Log out</Link>
  </>;

  return <nav className="nav nav-bar">
    <HomeLogo className="nav-logo" />
    <div className="nav-links">
      {isLogged ? productsLinks : authLinks}
    </div>
  </nav>;
};
