import React from 'react';
import { act, render, fireEvent } from '@testing-library/react';

import { FavoriteContext, TOGGLE_FAVORITE } from '../contexts';
import { FavoriteButton } from './FavoriteButton';

const withProviders = (element, state, dispatch) => (
  <FavoriteContext.Provider value={{ state, dispatch }}>
    {element}
  </FavoriteContext.Provider>
);

describe('testing FavoriteButton', () => {
  const favorites = ['TEST_ID_1'];

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should match with snapshot favorited', () => {
    const { container } = render(
      withProviders(<FavoriteButton id="TEST_ID_1" />, favorites)
    );

    expect(container).toMatchSnapshot();
  });

  test('should match with snapshot unfavorited', () => {
    const { container } = render(
      withProviders(<FavoriteButton id="TEST_ID_1" />, [])
    );

    expect(container).toMatchSnapshot();
  });

  test('should call dispatch when clicked', async () => {
    const dispatch = jest.fn();

    const { findByTestId } = render(
      withProviders(<FavoriteButton id="TEST_ID_1" />, favorites, dispatch)
    );

    await act(async () => {
      fireEvent.click(await findByTestId('FavoriteButton-button'));
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: TOGGLE_FAVORITE,
      payload: 'TEST_ID_1',
    });
  });
});
