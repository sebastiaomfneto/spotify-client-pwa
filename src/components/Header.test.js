import React from 'react';
import { act, render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { SearchContext, SET_SEARCH } from '../contexts';
import * as helpers from '../helpers';
import { waitForTimeout } from '../setupTests';
import { Header } from './Header';

const withProviders = (element, state, dispatch) => (
  <MemoryRouter>
    <SearchContext.Provider value={{ state, dispatch }}>
      {element}
    </SearchContext.Provider>
  </MemoryRouter>
);

describe('testing Header', () => {
  const value = 'TEST_VALUE';

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should match with snapshot', () => {
    const { container } = render(
      withProviders(
        <Header>
          <span>TEST</span>
        </Header>,
        value
      )
    );

    expect(container).toMatchSnapshot();
  });

  test('should call dispatch debounced when change value', async () => {
    const debounceTimeout = 500;

    jest.spyOn(helpers, 'debounce');
    const dispatch = jest.fn();

    const { findByTestId } = render(
      withProviders(
        <Header>
          <span>TEST</span>
        </Header>,
        '',
        dispatch
      )
    );

    await act(async () => {
      fireEvent.change(await findByTestId('Header-search-input'), {
        target: { value },
      });
    });

    expect(dispatch).not.toHaveBeenCalled();

    await waitForTimeout(debounceTimeout);

    expect(helpers.debounce).toHaveBeenCalledWith(
      expect.any(Function),
      debounceTimeout
    );
    expect(dispatch).toHaveBeenCalledWith({ type: SET_SEARCH, payload: value });
  });
});
