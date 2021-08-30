import React from 'react';
import { render } from '@testing-library/react';

import * as hooks from '../../../hooks';
import { SearchContext, FavoriteContext } from '../../../contexts';
import { TrackListPage } from './TrackListPage';

jest.mock('../../../services/StorageService');
jest.mock('../../../hooks/useAsync');

const withProviders = (element, state = '', dispatch) => (
  <SearchContext.Provider value={{ state, dispatch }}>
    <FavoriteContext.Provider value={{ state: [] }}>
      {element}
    </FavoriteContext.Provider>
  </SearchContext.Provider>
);

describe('testing TrackListPage', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should call useAsync perform', async () => {
    const search = 'TEST_SEARCH';

    const perform = jest.fn();
    jest.spyOn(hooks, 'useAsync').mockReturnValue({ data: [], perform });

    render(withProviders(<TrackListPage />, search));

    expect(perform).toHaveBeenCalledWith(search);
  });
});
