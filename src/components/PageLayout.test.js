import React from 'react';
import { render } from '@testing-library/react';

import { PageLayout } from './PageLayout';

describe('testing PageLayout', () => {
  const imageSrc = 'TEST_SRC';
  const title = 'TEST_TITLE';
  const subtitle = 'TEST_SUBTITLE';

  test('should match with snapshot', () => {
    const { container } = render(
      <PageLayout imageSrc={imageSrc} title={title} subtitle={subtitle}>
        <span>TEST</span>
      </PageLayout>
    );

    expect(container).toMatchSnapshot();
  });

  test('should match with snapshot when loading', () => {
    const { container } = render(
      <PageLayout imageSrc={imageSrc} title={title} subtitle={subtitle} loading>
        <span>TEST</span>
      </PageLayout>
    );

    expect(container).toMatchSnapshot();
  });
});
