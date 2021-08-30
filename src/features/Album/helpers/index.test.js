import { buildArtist, buildAvailability } from '.';

describe('testing buildArtist', () => {
  const artists = [
    { name: 'ARTIST_1' },
    { name: 'ARTIST_2' },
    { name: 'ARTIST_3' },
  ];
  test('should return artist name if only one', () => {
    expect(buildArtist(artists.slice(0, 1))).toEqual(artists[0].name);
  });

  test('should return "Various artists" if has many artists', () => {
    expect(buildArtist(artists)).toEqual('Various artists');
  });
});

describe('testing buildAvailability', () => {
  test('should return "Available in Brazil" if BR is included', () => {
    expect(buildAvailability(['AR', 'BR', 'US']));
  });

  test('should return "Unavailable in Brazil" if BR isn\'t included', () => {
    expect(buildAvailability(['AR', 'US']));
  });
});
