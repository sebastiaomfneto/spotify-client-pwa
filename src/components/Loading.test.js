import React from 'react';
import { render } from '@testing-library/react';

import { Loading } from './Loading';

describe('testing Loading', () => {
  test('should match with snapshot', () => {
    const { container } = render(<Loading loading />);

    expect(container).toMatchSnapshot();
  });

  test('should match with snapshot when loading is false', () => {
    const { container } = render(<Loading />);

    expect(container).toMatchSnapshot();
  });
});
