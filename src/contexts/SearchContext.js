import React, { useReducer } from 'react';

import { NotImplementedError } from '../helpers';

export const SearchContext = React.createContext();

export const SET_SEARCH = 'SET_SEARCH';

function reducer(_state, action) {
  switch (action.type) {
    case SET_SEARCH:
      return action.payload;
    default:
      throw new NotImplementedError();
  }
}

export function SearchContextProvider({ initialState = '', children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SearchContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
