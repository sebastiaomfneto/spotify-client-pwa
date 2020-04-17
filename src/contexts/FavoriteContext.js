import React, { useState, useEffect } from "react";

import { getItem, setItem } from "../services/StorageService";

export const FavoriteContext = React.createContext();

export function FavoriteContextProvider({ children }) {
  const initialFavorites = getItem("favorites");

  const [favorites, setFavorites] = useState(initialFavorites ?? []);

  useEffect(() => {
    setItem("favorites", favorites);
  }, [favorites]);

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        setFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
