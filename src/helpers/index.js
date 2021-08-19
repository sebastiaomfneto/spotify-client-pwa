/**
 * Build image src attribute
 *
 * @param {object[]} images
 * @returns {string | undefined}
 */
export function buildImageSrc([image] = []) {
  return image?.url;
}

let timeoutId;

/**
 * Call function debounced
 *
 * @param {Function} fn
 * @param {number} timeout
 */
export function debounce(fn, timeout) {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(fn, timeout);
}

export class NotImplementedError extends Error {
  constructor() {
    super('Not implemented');
  }
}
