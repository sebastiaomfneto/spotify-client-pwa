import { act, renderHook } from '@testing-library/react-hooks';
import { useContext } from 'react';

import { NotImplementedError } from '../helpers';
import {
  SearchContext,
  SearchContextProvider,
  SET_SEARCH,
} from './SearchContext';

const renderContext = () =>
  renderHook(() => useContext(SearchContext), {
    wrapper: SearchContextProvider,
  });

describe('testing SearchContext', () => {
  const initialState = '';

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should state have initial value', () => {
    const { result } = renderContext();

    expect(result.current.state).toEqual(initialState);
  });

  test('should dispatch "SET_SEARCH"', () => {
    const { result } = renderContext();

    act(() => {
      result.current.dispatch({ type: SET_SEARCH, payload: 'TEST' });
    });

    expect(result.current.state).toEqual('TEST');
  });

  test('should throw error when dispatch unknown action type', () => {
    const { result } = renderContext();

    act(() => {
      result.current.dispatch({ type: 'TEST_UNKNOWN' });
    });

    expect(result.error).toBeInstanceOf(NotImplementedError);
  });
});
