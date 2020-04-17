import React from 'react';
import { Switch, Redirect, Route } from "react-router-dom";

import Signin from "./pages/Signin";
import ArtistItem from "./pages/ArtistItem";
import ArtistList from "./pages/ArtistList";
import AlbumItem from "./pages/AlbumItem";
import AlbumList from "./pages/AlbumList";
import TrackList from "./pages/TrackList";

export default function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/artists" />
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/artists/:id">
        <ArtistItem />
      </Route>
      <Route path="/artists">
        <ArtistList />
      </Route>
      <Route path="/albums/:id">
        <AlbumItem />
      </Route>
      <Route path="/albums">
        <AlbumList />
      </Route>
      <Route path="/tracks">
        <TrackList />
      </Route>
    </Switch>
  );
}
