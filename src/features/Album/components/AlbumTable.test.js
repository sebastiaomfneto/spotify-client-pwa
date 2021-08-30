import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { FavoriteContext } from '../../../contexts/FavoriteContext';
import { AlbumTable } from './AlbumTable';

jest.mock('../../../services/StorageService');

const withProviders = (element, state = [], dispatch) => (
  <MemoryRouter>
    <FavoriteContext.Provider value={{ state, dispatch }}>
      {element}
    </FavoriteContext.Provider>
  </MemoryRouter>
);

describe('testing AlbumTable', () => {
  const albums = [
    {
      id: 1,
      name: 'TEST_ARTIST',
      images: [{ src: 'TEST_SRC' }],
      artists: [{ name: 'ARTIST_1' }],
      available_markets: ['AR', 'BR'],
    },
  ];

  test('should match with snapshot', () => {
    const { container } = render(withProviders(<AlbumTable albums={albums} />));

    expect(container).toMatchSnapshot();
  });
});
