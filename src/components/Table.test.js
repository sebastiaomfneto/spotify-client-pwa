import React from 'react';
import { render } from '@testing-library/react';

import { Table } from './Table';

describe('testing Table', () => {
  const columns = ['TEST_COLUMN_1'];
  const rows = ['TEST_ROW_1', 'TEST_ROW_2'];

  test('should match with snapshot', () => {
    const { container } = render(
      <Table columns={columns}>
        {rows.map((row) => (
          <tr key={row}>
            <td>{row}</td>
          </tr>
        ))}
      </Table>
    );

    expect(container).toMatchSnapshot();
  });
});
