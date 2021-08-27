const { REACT_APP_SPOTIFY_CLIENT_ID } = process.env;

/**
 * Redirect to spotify to authenticate
 *
 * @returns {void}
 */
export function redirectToAuthenticateOnSpotify() {
  window.location.href = `https://accounts.spotify.com/authorize?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${window.location.origin}/signin`;
}

/**
 * Get token from url hash
 *
 * @param {string} hash
 * @returns {object}
 */
export function getTokenFromHash(hash = '') {
  return hash
    .replace(/^#/, '')
    .split(/&/)
    .map((i) => i.split(/=/))
    .reduce((ag, [k, v]) => ({ ...ag, [k]: v }), {});
}
