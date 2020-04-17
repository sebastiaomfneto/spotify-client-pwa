import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

import Nav from "./components/Nav";
import Header from "./components/Header";

import Providers from "./Providers";
import Routes from "./Routes";

export default function App() {
  return (
    <Providers>
      <Router>
        <div className="App">
          <div className="nav-section">
            <Nav />
          </div>
          <main>
            <Header />
            <div className="container">
              <Routes />
            </div>
          </main>
        </div>
      </Router>
    </Providers>
  );
}
