import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
import ArtistTable from "../components/ArtistTable";

import { getArtists } from "../services/SpotifyService";

export default function ArtistList() {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getArtists()
      .then((artists) => setArtists(artists))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Layout title="Artists" loading={loading}>
      <ArtistTable artists={artists} />
    </Layout>
  );
}
