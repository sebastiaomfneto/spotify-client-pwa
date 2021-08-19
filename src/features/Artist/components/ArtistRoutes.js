import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthenticatedRoute } from '../../../components';
import { ArtistItemPage, ArtistListPage } from './';

export function ArtistRoutes({ match }) {
  return (
    <Switch>
      <AuthenticatedRoute exact path={`${match.url}/:id`}>
        <ArtistItemPage />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path={`${match.url}/`}>
        <ArtistListPage />
      </AuthenticatedRoute>
    </Switch>
  );
}
