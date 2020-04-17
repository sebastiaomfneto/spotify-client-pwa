import React, { useState, useEffect, useContext } from "react";

import { Layout } from "../../components/Layout";
import { ArtistTable } from "../../components/Table";

import { SearchContext } from "../../contexts/SearchContext";

import { SpotifyService } from "../../services/SpotifyService";

export function ArtistList() {
  const { search } = useContext(SearchContext);

  const [loading, setLoading] = useState(false);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    if (search) {
      setLoading(true);

      new SpotifyService()
        .getArtists(search)
        .then((artists) => setArtists(artists))
        .finally(() => setLoading(false));
    } else {
      setArtists([]);
    }
  }, [search]);

  return (
    <Layout title="Artists" loading={loading}>
      <ArtistTable artists={artists} />
    </Layout>
  );
}
