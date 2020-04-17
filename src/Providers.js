import React from "react";

import { AuthenticationContextProvider } from "./contexts/AuthenticationContext";
import { SearchContextProvider } from "./contexts/SearchContext";
import { FavoriteContextProvider } from "./contexts/FavoriteContext";

export function Providers({ children }) {
  return (
    <AuthenticationContextProvider>
      <SearchContextProvider>
        <FavoriteContextProvider>{children}</FavoriteContextProvider>
      </SearchContextProvider>
    </AuthenticationContextProvider>
  );
}
