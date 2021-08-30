import { act, renderHook } from '@testing-library/react-hooks';
import { useContext } from 'react';

import * as StorageService from '../services/StorageService';
import { NotImplementedError } from '../helpers';
import {
  FavoriteContext,
  FavoriteContextProvider,
  TOGGLE_FAVORITE,
} from './FavoriteContext';

jest.mock('../services/StorageService');

const renderContext = () =>
  renderHook(() => useContext(FavoriteContext), {
    wrapper: FavoriteContextProvider,
  });

describe('testing FavoriteContext', () => {
  const initialState = ['TEST_ID_1'];

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should state have initial value', () => {
    jest.spyOn(StorageService, 'getItem').mockReturnValueOnce(initialState);

    const { result } = renderContext();

    expect(result.current.state).toEqual(initialState);
  });

  test('should dispatch "TOGGLE_FAVORITE"', () => {
    const willUnfavorited = 'TEST_ID_2';
    const willFavorited = 'TEST_ID_3';

    jest
      .spyOn(StorageService, 'getItem')
      .mockReturnValueOnce([...initialState, willUnfavorited]);

    const { result } = renderContext();

    act(() => {
      result.current.dispatch({
        type: TOGGLE_FAVORITE,
        payload: willUnfavorited,
      });
    });

    act(() => {
      result.current.dispatch({
        type: TOGGLE_FAVORITE,
        payload: willFavorited,
      });
    });

    expect(result.current.state).toEqual([...initialState, willFavorited]);
  });

  test('should throw error when dispatch unknown action type', () => {
    const { result } = renderContext();

    act(() => {
      result.current.dispatch({ type: 'TEST_UNKNOWN' });
    });

    expect(result.error).toBeInstanceOf(NotImplementedError);
  });
});
