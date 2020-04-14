import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import "./App.scss";

import Nav from "./components/Nav";
import Header from "./components/Header";

import ArtistList from "./containers/ArtistList";
import AlbumItem from "./containers/AlbumItem";
import AlbumList from "./containers/AlbumList";
import TrackList from "./containers/TrackList";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="nav-section">
          <Nav />
        </div>
        <main>
          <Header />
          <div className="container">
            <Switch>
              <Redirect exact from="/" to="/artists" />
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
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
