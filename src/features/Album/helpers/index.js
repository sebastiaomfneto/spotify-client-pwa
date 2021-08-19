/**
 * Returns firsrt artist name or label "various artists"
 * @param {object[]} artists 
 * @returns {string}
 */

export function buildArtist(artists = []) {
  if (artists.length > 1) {
    return 'Various artists';
  }

  return artists[0]?.name;
}

/**
 * Returns availability label by available markets
 *
 * @param {object[]} availableMarkets
 * @returns {string}
 */
export function buildAvailability(availableMarkets = []) {
  return availableMarkets.includes('BR')
    ? 'Available in Brazil'
    : 'Unavailable in Brazil';
}
