import '@testing-library/jest-dom/extend-expect';

process.env.REACT_APP_SPOTIFY_CLIENT_ID = 'TEST_SPOTIFY_CLIENT_ID';

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
  },
});

export const waitForTimeout = (timeout) =>
  new Promise((r) => setTimeout(r, timeout));
