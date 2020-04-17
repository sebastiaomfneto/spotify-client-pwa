import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import "./Signin.scss";

import Layout from "../components/Layout";
import Logo from "../components/Logo";

const {
  CURRENT_URL = window.location.href,
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


export default function Signin() {
  const history = useHistory();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      getTokenFromHash(hash);

      history.push("/artists");
    }
  }, [hash, history]);

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
