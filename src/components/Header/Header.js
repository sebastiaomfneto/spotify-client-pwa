import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";

import { SearchContext } from "../../contexts/SearchContext";

let timeoutId;
function debounce(fn, timeout) {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(fn, timeout);
}

export function Header() {
  const { search, setSearch } = useContext(SearchContext);
  const [term, setTerm] = useState(search);

  useEffect(() => {
    debounce(() => setSearch(term), 500);
  }, [term, setSearch]);

  return (
    <header className="Header">
      <form>
        <label>
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="search"
            placeholder="Search for artists, albums and tracks"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </label>
      </form>
    </header>
  );
}
