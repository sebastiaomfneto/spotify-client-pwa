import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
import TrackTable from "../components/TrackTable";

import { getTracks } from "../services/SpotifyService";

export default function TrackList() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getTracks().then((tracks) => setTracks(tracks));
  }, []);

  return (
    <Layout title="Tracks">
      <TrackTable tracks={tracks} />
    </Layout>
  );
}
