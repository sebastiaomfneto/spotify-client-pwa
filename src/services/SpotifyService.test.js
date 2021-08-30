import axios from 'axios';

import * as SpotifyService from './SpotifyService';

jest.mock('axios');

describe('testing SpotifyService', () => {
  const search = 'TEST_SEARCH';
  const result = ['TEST_RESULT'];
  const id = 'TEST_ID';

  afterEach(() => {
    jest.clearAllMocks();
  }, []);

  test('should getAlbums call axios get and return data albums items', async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        albums: {
          items: result,
        },
      },
    });

    await expect(SpotifyService.getAlbums(search)).resolves.toEqual(result);
    expect(axios.get).toHaveBeenCalledWith('/search', {
      params: { type: 'album', q: search },
    });
  });

  test('should getAlbumById call axios get and return data', async () => {
    axios.get.mockResolvedValueOnce({
      data: result,
    });

    await expect(SpotifyService.getAlbumById(id)).resolves.toEqual(result);
    expect(axios.get).toHaveBeenCalledWith(`albums/${id}`);
  });

  test('should getAlbumTracks call axios get and return data items', async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        items: result,
      },
    });

    await expect(SpotifyService.getAlbumTracks(id)).resolves.toEqual(result);
    expect(axios.get).toHaveBeenCalledWith(`albums/${id}/tracks`);
  });

  test('should getArtists call axios get and return data artists items', async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        artists: {
          items: result,
        },
      },
    });

    await expect(SpotifyService.getArtists(search)).resolves.toEqual(result);
    expect(axios.get).toHaveBeenCalledWith('search', {
      params: { type: 'artist', q: search },
    });
  });

  test('should getArtistById call axios get and return data', async () => {
    axios.get.mockResolvedValueOnce({
      data: result,
    });

    await expect(SpotifyService.getArtistById(id)).resolves.toEqual(result);
    expect(axios.get).toHaveBeenCalledWith(`artists/${id}`);
  });

  test('should getArtistAlbums call axios get and return data items', async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        items: result,
      },
    });

    await expect(SpotifyService.getArtistAlbums(id)).resolves.toEqual(result);
    expect(axios.get).toHaveBeenCalledWith(`artists/${id}/albums`);
  });

  test('should getTracks call axios get and return data tracks items', async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        tracks: {
          items: result,
        },
      },
    });

    await expect(SpotifyService.getTracks(search)).resolves.toEqual(result);
    expect(axios.get).toHaveBeenCalledWith('/search', {
      params: { type: 'track', q: search },
    });
  });

  test('should getTrackById call axios get and return data', async () => {
    axios.get.mockResolvedValueOnce({
      data: result,
    });

    await expect(SpotifyService.getTrackById(id)).resolves.toEqual(result);
    expect(axios.get).toHaveBeenCalledWith(`tracks/${id}`);
  });
});
