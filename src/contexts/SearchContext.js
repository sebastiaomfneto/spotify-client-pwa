import React, { useState } from "react";

export const SearchContext = React.createContext();

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
