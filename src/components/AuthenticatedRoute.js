import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { AuthenticationContext } from '../contexts';

export function AuthenticatedRoute({ children, ...params }) {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <Route
      {...params}
      render={() => {
        if (isAuthenticated) {
          return children;
        }

        return <Redirect to="/signin" />;
      }}
    />
  );
}
