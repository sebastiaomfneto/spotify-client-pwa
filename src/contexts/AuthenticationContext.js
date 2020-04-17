import React, { useState, useEffect } from "react";

import { getItem, setItem } from "../services/StorageService";

const AuthenticationContext = React.createContext();

export default AuthenticationContext;

export function AuthenticationContextProvider({ children }) {
  const initialToken = getItem("token");
  const [token, setToken] = useState(initialToken);
  const [isAuthenticated, setIsAuthenticated] = useState(!!initialToken);

  useEffect(() => {
    setItem("token", token);
    setIsAuthenticated(!!token);
  }, [token]);

  return (
    <AuthenticationContext.Provider
      value={{
        token,
        isAuthenticated,
        setToken,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
