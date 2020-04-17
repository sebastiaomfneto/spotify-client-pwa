import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "./FavoriteButton.scss";

export default function FavoriteButton({ id }) {
  const [isfavorited, setIsFavorited] = useState(false);

  return (
    <button
      className={`${isfavorited ? "favorited" : ""}`}
      onClick={() => setIsFavorited(!isfavorited)}
    >
      <FontAwesomeIcon icon={faHeart} />
    </button>
  );
}
