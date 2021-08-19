import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

export function Nav() {
  return (
    <nav className="Nav">
      <h2>Browse</h2>
      <NavLink to="/artists">Artists</NavLink>
      <NavLink to="/albums">Albums</NavLink>
      <NavLink to="/tracks">Tracks</NavLink>
    </nav>
  );
}
