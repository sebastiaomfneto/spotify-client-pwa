import React from "react";

import "./Layout.scss";

export default function Layout({ imageSrc, title, subtitle, children }) {
  return (
    <div className="Layout">
      <div>
        {imageSrc ? (
          <img src={imageSrc} alt="container" width="150px" height="150px" />
        ) : null}
        <h1>{title}</h1>
      </div>
      {subtitle ? <h2>{subtitle}</h2> : null}
      {children}
    </div>
  );
}
