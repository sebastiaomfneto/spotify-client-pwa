import React, { useEffect, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { ReactComponent as SpotifyLogo } from '../../../assets/spotify-logo.svg';
import { PageLayout } from '../../../components';
import { AuthenticationContext, SET_TOKEN } from '../../../contexts';
import { redirectToAuthenticateOnSpotify, getTokenFromHash } from '../helpers';

import './SigninPage.scss';

export function SigninPage() {
  const history = useHistory();

  const { hash } = useLocation();

  const { dispatch } = useContext(AuthenticationContext);

  useEffect(() => {
    if (hash) {
      dispatch({ type: SET_TOKEN, payload: getTokenFromHash(hash) });

      process.nextTick(() => {
        history.push('/artists');
      });
    }
  }, [hash, dispatch, history]);

  return (
    <PageLayout title="Signin">
      <section className="Signin">
        <SpotifyLogo width="150px" height="150px" fill="#1db954" />
        <button onClick={() => redirectToAuthenticateOnSpotify()}>
          Sign In With Spotify
        </button>
      </section>
    </PageLayout>
  );
}
