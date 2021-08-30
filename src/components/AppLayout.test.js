import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { SearchContext } from '../contexts';
import { AppLayout } from './AppLayout';

const withProviders = (Element) => (
  <MemoryRouter>
    <SearchContext.Provider value={{}}>{Element}</SearchContext.Provider>
  </MemoryRouter>
);

describe('testing AppLayout', () => {
  test('should match with snapshot', () => {
    const { container } = render(
      withProviders(
        <AppLayout>
          <span>TEST</span>
        </AppLayout>
      )
    );

    expect(container).toMatchSnapshot();
  });
});
