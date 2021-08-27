/**
 * Returns popularity label by followers number
 *
 * @param {number} followers
 * @returns {string}
 */
export function buildPopularity(followers = 0) {
  switch (true) {
    case followers >= 80:
      return 'Hot';
    case followers >= 60 && followers <= 79:
      return 'Cool';
    case followers >= 30 && followers <= 59:
      return 'Regular';
    case followers < 30:
      return 'Underground';
    default:
      return '';
  }
}
