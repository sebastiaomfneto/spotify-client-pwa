import React from 'react';

import { Loading } from './Loading';

import './PageLayout.scss';

export function PageLayout({ imageSrc, title, subtitle, loading, children }) {
  return (
    <div className="PageLayout">
      <div>
        {imageSrc ? (
          <img src={imageSrc} alt="container" width="150px" height="150px" />
        ) : null}
        <h1>{title}</h1>
      </div>
      {subtitle ? <h2>{subtitle}</h2> : null}
      {loading ? <Loading loading={loading} /> : children}
    </div>
  );
}
