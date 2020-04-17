import React, { useEffect, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";

import "./Signin.scss";

import { Layout } from "../../components/Layout";
import { Logo } from "../../components/Logo";

import { AuthenticationContext } from "../../contexts/AuthenticationContext";

const {
  CURRENT_URL = window.location.origin + "/signin",
  CLIENT_ID = "63414da0d30c45cfb234e64103619981",
} = process.env;

function redirectToAuthenticateOnSpotify() {
  window.location.href = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${CURRENT_URL}`;
}

function getTokenFromHash(hash = "") {
  return hash
    .replace(/#/i, "")
    .split(/&/i)
    .map((i) => i.split(/=/i))
    .reduce((ag, [k, v]) => ({ ...ag, [k]: v }), {});
}

export function Signin() {
  const history = useHistory();
  const { hash } = useLocation();
  const { setToken } = useContext(AuthenticationContext);

  useEffect(() => {
    if (hash) {
      const token = getTokenFromHash(hash);

      setToken(token);

      setTimeout(() => {
        history.push("/artists");
      });
    }
  }, [hash, setToken, history]);

  return (
    <Layout title="Signin">
      <section className="Signin">
        <Logo />
        <button onClick={() => redirectToAuthenticateOnSpotify()}>
          Sign In With Spotify
        </button>
      </section>
    </Layout>
  );
}
