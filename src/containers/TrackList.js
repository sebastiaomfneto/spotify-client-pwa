import React from "react";

import Container from "../components/Container";
import TrackTable from "../components/TrackTable";

export default function TrackList() {
  const tracks = [];

  return (
    <Container title="Tracks">
      <TrackTable tracks={tracks} />
    </Container>
  );
}
