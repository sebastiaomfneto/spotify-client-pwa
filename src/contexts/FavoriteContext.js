import React, { useEffect, useReducer } from 'react';

import * as StorageService from '../services/StorageService';
import { NotImplementedError } from '../helpers';

export const FavoriteContext = React.createContext();

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

const initialState = StorageService.getItem('favorites') ?? [];

function reducer(state, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return state.concat(action.payload);
    case REMOVE_FAVORITE:
      return state.filter((favorite) => favorite !== action.payload);
    default:
      throw new NotImplementedError();
  }
}

export function FavoriteContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

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
