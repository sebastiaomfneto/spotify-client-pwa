import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

import "./Loading.scss";

export default function Loading({ loading }) {
  if (loading) {
    return (
      <div className="Loading">
        <FontAwesomeIcon icon={faCircleNotch} size="3x" spin />
      </div>
    );
  }

  return null;
}
