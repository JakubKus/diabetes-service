import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTES } from '../shared/routes';
import { Login } from '../login/Login';
import { Nav } from '../nav/Nav';

export const App: FC = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path={ROUTES.LOGIN}><Login /></Route>
      <Route exact path={ROUTES.REGISTER}><Login /></Route>
    </Switch>
  </Router>
);
