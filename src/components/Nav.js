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
      <NavLinkWithActiveClassName to="/album">Album</NavLinkWithActiveClassName>
      <NavLinkWithActiveClassName to="/track">Track</NavLinkWithActiveClassName>
    </nav>
  );
}
