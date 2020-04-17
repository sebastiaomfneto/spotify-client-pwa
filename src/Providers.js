import React from "react";

import { AuthenticationContextProvider } from "./contexts/AuthenticationContext";

export default function Providers({ children }) {
  return (
    <AuthenticationContextProvider>{children}</AuthenticationContextProvider>
  );
}
