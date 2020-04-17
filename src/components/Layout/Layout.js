import React from "react";

import { Loading } from "../Loading";

import "./Layout.scss";

export function Layout({ imageSrc, title, subtitle, children, loading }) {
  return (
    <div className="Layout">
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
