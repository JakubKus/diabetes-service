import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTES } from 'shared/routes';
import { Login } from 'login/Login';
import { Register } from 'register/Register';
import { Nav } from 'nav/Nav';
import { Search } from 'search/Search';

export const App: FC = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path={ROUTES.LOGIN}><Login /></Route>
      <Route exact path={ROUTES.REGISTER}><Register /></Route>
      <Route exact path={ROUTES.ADD_PRODUCT}><Search /></Route>
    </Switch>
  </Router>
);
