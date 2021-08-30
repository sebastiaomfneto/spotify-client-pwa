import { buildArtist, buildDuration } from './';

describe('testing buildArtist', () => {
  test('should return empty string if artists params is empty or undefined', () => {
    expect(buildArtist([])).toEqual('');
    expect(buildArtist()).toEqual('');
  });

  test('should return artists name comma separated', () => {
    const artists = [
      { name: 'ARTIST_NAME_1' },
      { name: 'ARTIST_NAME_2' },
      { name: 'ARTIST_NAME_3' },
    ];
    const result = 'ARTIST_NAME_1, ARTIST_NAME_2, ARTIST_NAME_3';

    expect(buildArtist(artists)).toEqual(result);
  });
});

describe('testing buildDuration', () => {
  test('should return format mm:ss', () => {
    const cases = new Map([
      ['01:00', 60000],
      ['03:45', 225000],
      ['00:45', 45000],
      ['00:45', 45123],
      ['00:00', 0],
    ]);

    cases.forEach((value, key) => {
      expect(buildDuration(value)).toEqual(key);
    });
  });
});
