import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import "./Header.scss";

function Header() {
  return (
    <header className="Header">
      <form>
        <label>
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="search"
            placeholder="Search for artists, albums and tracks"
          />
        </label>
      </form>
    </header>
  );
}

export default Header;
