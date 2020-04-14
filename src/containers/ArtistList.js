import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
import ArtistTable from "../components/ArtistTable";

import { getArtists } from "../services/SpotifyService";

export default function ArtistList() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getArtists().then((artists) => setArtists(artists));
  }, []);

  return (
    <Layout title="Artists">
      <ArtistTable artists={artists} />
    </Layout>
  );
}
