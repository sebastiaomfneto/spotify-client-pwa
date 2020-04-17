import React, { useState } from "react";

const SearchContext = React.createContext();

export default SearchContext;

export function SearchContextProvider({ children }) {
  const [search, setSearch] = useState("");

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
