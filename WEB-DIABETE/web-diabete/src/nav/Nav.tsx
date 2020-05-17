import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeLogo } from '../shared/icons/home.svg';
import { ROUTES } from '../shared/routes';
import { selectIsLogged, handleLogout } from '../features/auth/auth';
import './nav.scss';

export const Nav: FC = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectIsLogged);
  const logout = () => dispatch(handleLogout());

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
    <Link className="nav-links__link" to={ROUTES.ADD_PRODUCT} onClick={logout}>Add product</Link>
    <Link className="nav-links__link" to="/" onClick={logout}>Log out</Link>
  </>;

  return <nav className="nav nav-bar">
    <HomeLogo className="nav-logo" />
    <div className="nav-links">
      {isLogged ? productsLinks : authLinks}
    </div>
  </nav>;
};
