import React from "react";

import { AuthenticationContextProvider } from "./contexts/AuthenticationContext";
import { SearchContextProvider } from "./contexts/SearchContext";

export default function Providers({ children }) {
  return (
    <AuthenticationContextProvider>
      <SearchContextProvider>{children}</SearchContextProvider>
    </AuthenticationContextProvider>
  );
}
