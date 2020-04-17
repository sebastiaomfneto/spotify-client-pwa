import React, { useContext } from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import { AuthenticationContext } from "./contexts/AuthenticationContext";

import Signin from "./pages/Signin";
import ArtistItem from "./pages/ArtistItem";
import ArtistList from "./pages/ArtistList";
import AlbumItem from "./pages/AlbumItem";
import AlbumList from "./pages/AlbumList";
import TrackList from "./pages/TrackList";

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
