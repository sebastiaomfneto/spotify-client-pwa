import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import "./App.scss";

import Nav from "./components/Nav";
import Header from "./components/Header";

import Signin from "./pages/Signin";
import ArtistItem from "./pages/ArtistItem";
import ArtistList from "./pages/ArtistList";
import AlbumItem from "./pages/AlbumItem";
import AlbumList from "./pages/AlbumList";
import TrackList from "./pages/TrackList";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav-section">
          <Nav />
        </div>
        <main>
          <Header />
          <div className="container">
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
          </div>
        </main>
      </div>
    </Router>
  );
}
