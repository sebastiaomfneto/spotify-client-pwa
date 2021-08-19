import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { SigninPage } from './';

export function SigninRoutes({ match }) {
  return (
    <Switch>
      <Route exact path={`${match.url}/`}>
        <SigninPage />
      </Route>
    </Switch>
  );
}
