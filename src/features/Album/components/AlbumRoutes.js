import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthenticatedRoute } from '../../../components';
import { AlbumItemPage, AlbumListPage } from './';

export function AlbumRoutes({ match }) {
  return (
    <Switch>
      <AuthenticatedRoute exact path={`${match.url}/:id`}>
        <AlbumItemPage />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path={`${match.url}/`}>
        <AlbumListPage />
      </AuthenticatedRoute>
    </Switch>
  );
}
