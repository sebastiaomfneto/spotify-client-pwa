import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthenticatedRoute } from '../../../components';
import { TrackListPage } from './';

export function TrackRoutes({ match }) {
  return (
    <Switch>
      <AuthenticatedRoute exact path={`${match.url}/`}>
        <TrackListPage />
      </AuthenticatedRoute>
    </Switch>
  );
}
