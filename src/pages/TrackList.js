import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
import TrackTable from "../components/TrackTable";

import SpotifyService from "../services/SpotifyService";

export default function TrackList() {
  const [loading, setLoading] = useState(true);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    new SpotifyService()
      .getTracks()
      .then((tracks) => setTracks(tracks))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Layout title="Tracks" loading={loading}>
      <TrackTable tracks={tracks} />
    </Layout>
  );
}
