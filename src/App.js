import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import "./App.scss";

import Nav from "./components/Nav";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="nav-section">
          <Nav />
        </div>
        <main>
          <Header />
          <div className="container">
            <Switch>
              <Redirect exact from="/" to="/artists" />
              <Route path="/artists"></Route>
              <Route path="/album"></Route>
              <Route path="/track"></Route>
            </Switch>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
