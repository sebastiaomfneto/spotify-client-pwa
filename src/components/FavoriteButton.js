import React, { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "./FavoriteButton.scss";

import FavoriteContext from "../contexts/FavoriteContext";

export default function FavoriteButton({ id }) {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  const [isfavorited, setIsFavorited] = useState(
    favorites.some((f) => f === id)
  );

  useEffect(() => {
    if (isfavorited) {
      setFavorites(favorites.concat([id]));
    } else {
      setFavorites(favorites.filter((f) => f !== id));
    }
  }, [isfavorited]);

  return (
    <button
      className={`${isfavorited ? "favorited" : ""}`}
      onClick={() => setIsFavorited(!isfavorited)}
    >
      <FontAwesomeIcon icon={faHeart} />
    </button>
  );
}
