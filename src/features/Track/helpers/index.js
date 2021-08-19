/**
 * Build artists name label
 *
 * @param {object[]} artists
 * @returns {string}
 */
export function buildArtist(artists = []) {
  return artists.map((a) => a.name).join(', ');
}

/**
 * Format duration miliseconds into MM:SS string
 *
 * @param {number} ms
 * @returns string
 */
export function buildDuration(ms = 0) {
  const min = (ms / 1000 / 60) << 0;
  let sec = (ms / 1000) % 60 << 0;

  if (sec < 10) {
    sec = sec.toString() + '0';
  }

  return `${min}:${sec}`;
}
