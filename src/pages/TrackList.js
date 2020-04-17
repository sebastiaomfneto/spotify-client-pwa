import React, { useState, useEffect, useContext } from "react";

import { Layout } from "../components/Layout";
import { TrackTable } from "../components/Table";

import { SearchContext } from "../contexts/SearchContext";

import { SpotifyService } from "../services/SpotifyService";

export default function TrackList() {
  const { search } = useContext(SearchContext);

  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    if (search) {
      setLoading(true);

      new SpotifyService()
        .getTracks(search)
        .then((tracks) => setTracks(tracks))
        .finally(() => setLoading(false));
    } else {
      setTracks([]);
    }
  }, [search]);

  return (
    <Layout title="Tracks" loading={loading}>
      <TrackTable tracks={tracks} />
    </Layout>
  );
}
