import React, { useContext, useMemo, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { FavoriteContext, TOGGLE_FAVORITE } from '../contexts';

import './FavoriteButton.scss';

export function FavoriteButton({ id }) {
  const { state: favorites, dispatch } = useContext(FavoriteContext);

  const isfavorited = useMemo(
    () => favorites.some((f) => f === id),
    [favorites, id]
  );

  const toggleFavorite = useCallback(() => {
    dispatch({ type: TOGGLE_FAVORITE, payload: id });
  }, [id, dispatch]);

  return (
    <button
      className={`FavoriteButton ${isfavorited ? 'favorited' : ''}`}
      onClick={toggleFavorite}
      data-testid="FavoriteButton-button"
    >
      <FontAwesomeIcon icon={faHeart} />
    </button>
  );
}
