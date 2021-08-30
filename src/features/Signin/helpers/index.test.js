import { getTokenFromHash, redirectToAuthenticateOnSpotify } from './';

describe('testing redirectToAuthenticateOnSpotify', () => {
  test('should set window.location.href value', () => {
    Object.defineProperty(window, 'location', {
      value: {
        origin: 'TEST_ORIGIN',
        href: '',
      },
    });
    const set = jest.fn();
    Object.defineProperty(window.location, 'href', {
      set,
    });

    const result =
      'https://accounts.spotify.com/authorize?client_id=TEST_SPOTIFY_CLIENT_ID&response_type=token&redirect_uri=TEST_ORIGIN/signin';

    redirectToAuthenticateOnSpotify();

    expect(set).toHaveBeenLastCalledWith(result);
  });
});

describe('testing getTokenFromHash', () => {
  test('should parser hash entries into object', () => {
    const hash = '#token_type=TEST_TYPE&access_token=TEST_TOKEN';
    const result = {
      token_type: 'TEST_TYPE',
      access_token: 'TEST_TOKEN',
    };

    expect(getTokenFromHash(hash)).toEqual(result);
  });
});
