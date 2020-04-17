import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.scss";

const NavLinkWithActiveClassName = (props) => (
  <NavLink activeClassName="active" {...props} />
);

export default function Nav() {
  return (
    <nav className="Nav">
      <h2>Browse</h2>
      <NavLinkWithActiveClassName to="/artists">
        Artists
      </NavLinkWithActiveClassName>
      <NavLinkWithActiveClassName to="/albums">Albums</NavLinkWithActiveClassName>
      <NavLinkWithActiveClassName to="/tracks">Tracks</NavLinkWithActiveClassName>
    </nav>
  );
}
