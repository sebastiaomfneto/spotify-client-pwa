import React, { useReducer, useMemo, useEffect } from 'react';

import * as StorageService from '../services/StorageService';
import { NotImplementedError } from '../helpers';

export const AuthenticationContext = React.createContext();

export const SET_TOKEN = 'SET_TOKEN';

function initializer(initialState) {
  return StorageService.getItem('token') ?? initialState;
}

function reducer(_state, action) {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload;
    default:
      throw new NotImplementedError();
  }
}

export function AuthenticationContextProvider({
  initialState = undefined,
  children,
}) {
  const [state, dispatch] = useReducer(reducer, initialState, initializer);

  useEffect(() => {
    StorageService.setItem('token', state);
  }, [state]);

  const isAuthenticated = useMemo(() => Boolean(state), [state]);

  return (
    <AuthenticationContext.Provider
      value={{
        state,
        dispatch,
        isAuthenticated,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
