import React, { useContext } from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import { AuthenticationContext } from "./contexts/AuthenticationContext";

import { Signin } from "./pages/Signin";
import { ArtistItem, ArtistList } from "./pages/Artist";
import { AlbumItem, AlbumList } from "./pages/Album";
import { TrackList } from "./pages/Track";

function AuthenticatedRoute({ children, ...params }) {
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

export function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/artists" />
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/artists/:id">
        <ArtistItem />
      </Route>
      <AuthenticatedRoute path="/artists">
        <ArtistList />
      </AuthenticatedRoute>
      <AuthenticatedRoute path="/albums/:id">
        <AlbumItem />
      </AuthenticatedRoute>
      <AuthenticatedRoute path="/albums">
        <AlbumList />
      </AuthenticatedRoute>
      <AuthenticatedRoute path="/tracks">
        <TrackList />
      </AuthenticatedRoute>
    </Switch>
  );
}
