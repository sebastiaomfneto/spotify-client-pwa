import React from "react";

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
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
