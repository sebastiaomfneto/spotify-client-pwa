import React from 'react';
import { render } from '@testing-library/react';

import * as hooks from '../../../hooks';
import { SearchContext, FavoriteContext } from '../../../contexts';
import * as SpotifyService from '../../../services/SpotifyService';
import { AlbumListPage } from './AlbumListPage';

jest.mock('../../../services/StorageService');
jest.mock('../../../hooks/useAsync');

const withProviders = (element, state = '', dispatch) => (
  <SearchContext.Provider value={{ state, dispatch }}>
    <FavoriteContext.Provider value={{ state: [] }}>
      {element}
    </FavoriteContext.Provider>
  </SearchContext.Provider>
);

describe('testing AlbumListPage', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should call useAsync perform', () => {
    const search = 'TEST_SEARCH';

    const perform = jest.fn();
    jest.spyOn(hooks, 'useAsync').mockReturnValue({ data: [], perform });

    render(withProviders(<AlbumListPage />, search));

    expect(hooks.useAsync).toHaveBeenCalledWith(SpotifyService.getAlbums, []);
    expect(perform).toHaveBeenCalledWith(search);
  });
});
