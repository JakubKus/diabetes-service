import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTES } from 'shared/routes';
import { Login } from 'login/Login';
import { Register } from 'register/Register';
import { Nav } from 'nav/Nav';
import { Search } from 'search/Search';
import { UserProducts } from 'user-products/UserProducts';

export const App: FC = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path={ROUTES.LOGIN}><Login /></Route>
      <Route exact path={ROUTES.REGISTER}><Register /></Route>
      <Route exact path={ROUTES.ADD_PRODUCT}><Search /></Route>
      <Route exact path={ROUTES.MY_PRODUCTS}><UserProducts /></Route>
    </Switch>
  </Router>
);
