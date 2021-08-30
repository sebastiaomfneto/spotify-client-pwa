import { act, renderHook } from '@testing-library/react-hooks';
import { useContext } from 'react';

import * as StorageService from '../services/StorageService';
import { NotImplementedError } from '../helpers';
import {
  AuthenticationContext,
  AuthenticationContextProvider,
  SET_TOKEN,
} from './AuthenticationContext';

jest.mock('../services/StorageService');

const renderContext = () =>
  renderHook(() => useContext(AuthenticationContext), {
    wrapper: AuthenticationContextProvider,
  });

describe('testing AuthenticationContext', () => {
  const initialState = { token_type: 'TEST_TYPE', access_token: 'TEST_TOKEN' };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should state have initial value', () => {
    jest.spyOn(StorageService, 'getItem').mockReturnValueOnce(initialState);

    const { result } = renderContext();

    expect(result.current.state).toEqual(initialState);
  });

  test('should dispatch "SET_TOKEN"', () => {
    const payload = { ...initialState };

    jest.spyOn(StorageService, 'getItem').mockReturnValueOnce(undefined);

    const { result } = renderContext();

    act(() => {
      result.current.dispatch({
        type: SET_TOKEN,
        payload,
      });
    });

    expect(result.current.state).toEqual(payload);
  });

  test('should call StorageService.setItem', () => {
    const payload = { ...initialState };

    jest.spyOn(StorageService, 'getItem').mockReturnValueOnce(undefined);
    jest.spyOn(StorageService, 'setItem');

    const { result } = renderContext();

    act(() => {
      result.current.dispatch({
        type: SET_TOKEN,
        payload,
      });
    });

    expect(StorageService.setItem).toHaveBeenLastCalledWith('token', payload);
  });

  test('should throw error when dispatch unknown action type', () => {
    const { result } = renderContext();

    act(() => {
      result.current.dispatch({ type: 'TEST_UNKNOWN' });
    });

    expect(result.error).toBeInstanceOf(NotImplementedError);
  });
});
