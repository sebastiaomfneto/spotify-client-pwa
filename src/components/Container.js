import React from "react";

import "./Container.scss";

function Container({ title, subtitle, children }) {
  return (
    <div className="Container">
      <h1>{title}</h1>
      {subtitle ? <h2>{subtitle}</h2> : null}
      {children}
    </div>
  );
}

export default Container;
