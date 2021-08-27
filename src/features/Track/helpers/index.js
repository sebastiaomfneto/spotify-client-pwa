/**
 * Build artists name label
 *
 * @param {object[]} artists
 * @returns {string}
 */
export function buildArtist(artists = []) {
  return artists.map((a) => a.name).join(', ');
}

const oneMinInSec = 60;
const oneSecInMs = 1000;
const oneMinInMs = 60000;

/**
 * Format duration miliseconds into MM:SS string
 *
 * @param {number} ms
 * @returns string
 */
export function buildDuration(ms = 0) {
  const min = ((ms / oneMinInMs) << 0).toString().padStart(2, '0');
  const sec = ((ms / oneSecInMs) % oneMinInSec << 0)
    .toString()
    .padStart(2, '0');

  return `${min}:${sec}`;
}
