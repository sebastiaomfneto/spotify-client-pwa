import React, { useEffect, useReducer } from 'react';

import * as StorageService from '../services/StorageService';
import { NotImplementedError } from '../helpers';

export const FavoriteContext = React.createContext();

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

function initializer(initialState) {
  return StorageService.getItem('favorites') ?? initialState;
}

function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const isfavorited = state.some((f) => f === action.payload);
      if (isfavorited) {
        return state.filter((favorite) => favorite !== action.payload);
      }
      return state.concat(action.payload);
    default:
      throw new NotImplementedError();
  }
}

export function FavoriteContextProvider({ initialState = [], children }) {
  const [state, dispatch] = useReducer(reducer, initialState, initializer);

  useEffect(() => {
    StorageService.setItem('favorites', state);
  }, [state]);

  return (
    <FavoriteContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
