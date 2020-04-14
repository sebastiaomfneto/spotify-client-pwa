import React from "react";

import "./Nav.scss";

function Nav() {
  return (
    <nav>
      <h2>Browse</h2>
      <a href="#/artists">Artists</a>
      <a href="#/album">Album</a>
      <a href="#/track">Track</a>
    </nav>
  );
}

export default Nav;
