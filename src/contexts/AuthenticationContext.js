import React, { useState, useEffect } from "react";

import { getItem, setItem } from "../services/StorageService";

const AuthenticationContext = React.createContext();

export default AuthenticationContext;

export function AuthenticationContextProvider({ children }) {
  const initialToken = getItem("token");
  const [token, setToken] = useState(initialToken);
  const [isAuthenticated] = useState(!!initialToken);

  useEffect(() => {
    setItem("token", token);
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
