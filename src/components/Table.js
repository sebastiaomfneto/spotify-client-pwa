import React, { Children } from "react";

import "./Table.scss";

export default function Table({ columns = [], children }) {
  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Children.count(children) > 0 ? (
            children
          ) : (
            <tr>
              <td colSpan={columns.length}>there are no records to display</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
