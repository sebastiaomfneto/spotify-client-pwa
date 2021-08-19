import React from 'react';

import { Nav, Header } from './';

import './AppLayout.scss';

export function AppLayout({ children }) {
  return (
    <div className="AppLayout">
      <div className="nav-section">
        <Nav />
      </div>
      <main>
        <Header />
        <div className="container">{children}</div>
      </main>
    </div>
  );
}
