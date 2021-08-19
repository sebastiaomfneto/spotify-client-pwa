/**
 * Get item from localStorage
 *
 * @param {string} key
 * @returns {any}
 */
export function getItem(key) {
  const content = localStorage.getItem(key);

  return JSON.parse(content);
}

/**
 * Set item from localStorage
 *
 * @param {string} key
 * @param {any} value
 * @returns {void}
 */
export function setItem(key, value) {
  const content = JSON.stringify(value);

  return localStorage.setItem(key, content);
}

/**
 * Remove item from localStorage
 *
 * @param {string} key
 * @returns {void}
 */
export function removeItem(key) {
  return localStorage.removeItem(key);
}
