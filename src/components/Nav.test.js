import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Nav } from './Nav';

const withProviders = (Element) => <MemoryRouter>{Element}</MemoryRouter>;

describe('testing Nav', () => {
  test('should match with snapshot', () => {
    const { container } = render(withProviders(<Nav />));

    expect(container).toMatchSnapshot();
  });
});
