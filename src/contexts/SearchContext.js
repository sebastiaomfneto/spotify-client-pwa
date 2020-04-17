import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const SearchContext = React.createContext();

export default SearchContext;

function getSearchFromLocation(location) {
  const { search } = location.search
    .replace(/\?/i, "")
    .split(/&/i)
    .map((i) => i.split(/=/i))
    .reduce((ag, [k, v]) => ({ ...ag, [k]: v }), {});

  return decodeURI(search);
}

export function SearchContextProvider({ children }) {
  const history = useHistory();
  const initialSearch = getSearchFromLocation(history.location);

  const [search, setSearch] = useState(initialSearch);

  useEffect(() => {
    history.replace({
      ...history.location,
      search: `search=${search}`,
    });
  }, [search, history]);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
