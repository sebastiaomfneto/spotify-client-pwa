import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import * as hooks from '../../../hooks';
import { FavoriteContext } from '../../../contexts';
import * as SpotifyService from '../../../services/SpotifyService';
import { AlbumItemPage } from './AlbumItemPage';

jest.mock('../../../services/StorageService');
jest.mock('../../../hooks/useAsync');

const withProviders = (element) => (
  <MemoryRouter initialEntries={['/test/100']}>
    <FavoriteContext.Provider value={{ state: [] }}>
      <Route path="/test/:id" render={() => element} />
    </FavoriteContext.Provider>
  </MemoryRouter>
);

describe('testing AlbumItemPage', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should call useAsync perform', () => {
    const perform = jest.fn();
    jest.spyOn(hooks, 'useAsync').mockReturnValue({ data: [], perform });

    render(withProviders(<AlbumItemPage />));

    expect(hooks.useAsync).toHaveBeenCalledWith(
      SpotifyService.getAlbumTracks,
      []
    );
    expect(perform).toHaveBeenCalledWith('100');
  });
});
