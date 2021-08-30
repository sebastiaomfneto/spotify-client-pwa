import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import * as hooks from '../../../hooks';
import { FavoriteContext } from '../../../contexts';
import * as SpotifyService from '../../../services/SpotifyService';
import { ArtistItemPage } from './ArtistItemPage';

jest.mock('../../../services/StorageService');
jest.mock('../../../hooks/useAsync');

const withProviders = (element) => (
  <MemoryRouter initialEntries={['/test/100']}>
    <FavoriteContext.Provider value={{ state: [] }}>
      <Route path="/test/:id" render={() => element} />
    </FavoriteContext.Provider>
  </MemoryRouter>
);

describe('testing ArtistItemPage', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should call useAsync perform', () => {
    const perform = jest.fn();
    jest.spyOn(hooks, 'useAsync').mockReturnValue({ data: [], perform });

    render(withProviders(<ArtistItemPage />));

    expect(hooks.useAsync).toHaveBeenCalledWith(
      SpotifyService.getArtistAlbums,
      []
    );
    expect(perform).toHaveBeenCalledWith('100');
  });
});
