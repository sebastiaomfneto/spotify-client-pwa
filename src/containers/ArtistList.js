import React from "react";

import Container from "../components/Container";
import ArtistTable from "../components/ArtistTable";

export default function ArtistList() {
  const artists = [];

  return (
    <Container title="Artists">
      <ArtistTable artists={artists} />
    </Container>
  );
}
