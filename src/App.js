import React, { lazy, Suspense } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import { AppLayout, Loading } from './components';
import {
  AuthenticationContextProvider,
  SearchContextProvider,
  FavoriteContextProvider,
} from './contexts';

const AlbumRoutes = lazy(() =>
  import('./features/Album').then((m) => ({ default: m.AlbumRoutes }))
);
const ArtistRoutes = lazy(() =>
  import('./features/Artist').then((m) => ({ default: m.ArtistRoutes }))
);
const SigninRoutes = lazy(() =>
  import('./features/Signin').then((m) => ({ default: m.SigninRoutes }))
);
const TrackRoutes = lazy(() =>
  import('./features/Track').then((m) => ({ default: m.TrackRoutes }))
);

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <AuthenticationContextProvider>
        <SearchContextProvider>
          <FavoriteContextProvider>
            <AppLayout>
              <Switch>
                <Redirect exact from="/" to="/artists" />
                <Route path="/albums" component={AlbumRoutes} />
                <Route path="/artists" component={ArtistRoutes} />
                <Route path="/signin" component={SigninRoutes} />
                <Route path="/tracks" component={TrackRoutes} />
              </Switch>
            </AppLayout>
          </FavoriteContextProvider>
        </SearchContextProvider>
      </AuthenticationContextProvider>
    </Suspense>
  );
}
