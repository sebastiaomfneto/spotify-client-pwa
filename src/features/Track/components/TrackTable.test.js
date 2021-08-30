import React from 'react';
import { render } from '@testing-library/react';

import { FavoriteContext } from '../../../contexts/FavoriteContext';
import { TrackTable } from './TrackTable';

jest.mock('../../../services/StorageService');

const withProviders = (element, state = [], dispatch) => (
  <FavoriteContext.Provider value={{ state, dispatch }}>
    {element}
  </FavoriteContext.Provider>
);

describe('testing TrackTable', () => {
  const album = {
    name: 'TEST_ALBUM',
    images: [{ src: 'TEST_SRC' }],
  };

  const tracks = [
    {
      id: 1,
      album,
      artists: [{ name: 'TEST_ARTIST_1' }, { name: 'TEST_ARTIST_1' }],
      duration_ms: 100,
    },
  ];

  test('should match with snapshot', () => {
    const { container } = render(
      withProviders(<TrackTable album={album} tracks={tracks} />)
    );

    expect(container).toMatchSnapshot();
  });
});
