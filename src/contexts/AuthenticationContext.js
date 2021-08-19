import React, { useReducer, useMemo } from 'react';

import * as StorageService from '../services/StorageService';
import { NotImplementedError } from '../helpers';
import { usePersistedStorage } from '../hooks';

export const AuthenticationContext = React.createContext();

export const SET_TOKEN = 'SET_TOKEN';

const initialState = StorageService.getItem('token');

function reducer(_state, action) {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload;
    default:
      throw new NotImplementedError();
  }
}

export function AuthenticationContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  usePersistedStorage('token', state);

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
