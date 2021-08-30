import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { FavoriteContext } from '../../../contexts/FavoriteContext';
import { ArtistTable } from './ArtistTable';

jest.mock('../../../services/StorageService');

const withProviders = (element, state = [], dispatch) => (
  <MemoryRouter>
    <FavoriteContext.Provider value={{ state, dispatch }}>
      {element}
    </FavoriteContext.Provider>
  </MemoryRouter>
);

describe('testing ArtistTable', () => {
  const artists = [
    {
      id: 1,
      name: 'TEST_ARTIST',
      images: [{ src: 'TEST_SRC' }],
      genres: ['TEST_GENRE_1', 'TEST_GENRE_2'],
      followers: { total: 1 },
    },
  ];

  test('should match with snapshot', () => {
    const { container } = render(
      withProviders(<ArtistTable artists={artists} />)
    );

    expect(container).toMatchSnapshot();
  });
});
