import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

jest.mock('./services/StorageService');

test('should render without crashes', () => {
  const { baseElement, unmount } = render(<App />, { wrapper: MemoryRouter });

  expect(baseElement).toBeDefined();
  expect(unmount()).toBeTruthy();
});
