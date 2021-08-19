import React, { useContext, useMemo, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { FavoriteContext, ADD_FAVORITE, REMOVE_FAVORITE } from '../contexts';

import './FavoriteButton.scss';

export function FavoriteButton({ id }) {
  const { state: favorites, dispatch } = useContext(FavoriteContext);

  const isfavorited = useMemo(
    () => favorites.some((f) => f === id),
    [favorites, id]
  );

  const toggleFavorite = useCallback(() => {
    if (isfavorited) {
      dispatch({ type: REMOVE_FAVORITE, payload: id });
    } else {
      dispatch({ type: ADD_FAVORITE, payload: id });
    }
  }, [isfavorited, id, dispatch]);

  return (
    <button
      className={`FavoriteButton ${isfavorited ? 'favorited' : ''}`}
      onClick={toggleFavorite}
    >
      <FontAwesomeIcon icon={faHeart} />
    </button>
  );
}
