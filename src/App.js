import React from "react";

import "./App.scss";

import Nav from "./components/Nav";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <div className="nav-section">
        <Nav />
      </div>
      <main>
        <Header />
        <div className="container"></div>
      </main>
    </div>
  );
}

export default App;
