import React from 'react';
import { render, act } from '@testing-library/react';
import { MemoryRouter, Route, Switch } from 'react-router';

import { AuthenticationContext } from '../contexts';
import { AuthenticatedRoute } from './AuthenticatedRoute';

const withProviders = (element, isAuthenticated) => (
  <MemoryRouter initialEntries={['/test']}>
    <AuthenticationContext.Provider value={{ isAuthenticated }}>
      <Switch>
        {element}
        <Route path="/signin" exact>
          <span>SIGNIN</span>
        </Route>
      </Switch>
    </AuthenticationContext.Provider>
  </MemoryRouter>
);

describe('testing AuthenticatedRoute', () => {
  test('should render children when authenticated', () => {
    let baseElement;
    act(() => {
      ({ baseElement } = render(
        withProviders(
          <AuthenticatedRoute path="/test" exact>
            <span>AUTHENTICATED</span>
          </AuthenticatedRoute>,
          true
        )
      ));
    });

    expect(baseElement).toMatchSnapshot();
  });

  test('should redirect /signin when unauthenticated', async () => {
    let baseElement;
    act(() => {
      ({ baseElement } = render(
        withProviders(
          <AuthenticatedRoute path="/test" exact>
            <span>AUTHENTICATED</span>
          </AuthenticatedRoute>,
          false
        )
      ));
    });

    expect(baseElement).toMatchSnapshot();
  });
});
