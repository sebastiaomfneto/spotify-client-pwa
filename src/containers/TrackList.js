import React, { useState, useEffect } from "react";

import Container from "../components/Container";
import TrackTable from "../components/TrackTable";

import { getTracks } from "../services/SpotifyService";

export default function TrackList() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getTracks().then((tracks) => setTracks(tracks));
  });

  return (
    <Container title="Tracks">
      <TrackTable tracks={tracks} />
    </Container>
  );
}
