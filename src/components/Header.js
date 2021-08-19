import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { SearchContext, SET_SEARCH } from '../contexts';
import { debounce } from '../helpers';

import './Header.scss';

export function Header() {
  const { state: search, dispatch } = useContext(SearchContext);
  const [term, setTerm] = useState(() => search);

  useEffect(() => {
    debounce(() => dispatch({ type: SET_SEARCH, payload: term }), 500);
  }, [term, dispatch]);

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
