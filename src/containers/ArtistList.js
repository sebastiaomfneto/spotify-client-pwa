import React, { useState, useEffect } from "react";

import Container from "../components/Container";
import ArtistTable from "../components/ArtistTable";

import { getArtists } from "../services/SpotifyService";

export default function ArtistList() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getArtists().then((artists) => setArtists(artists));
  });

  return (
    <Container title="Artists">
      <ArtistTable artists={artists} />
    </Container>
  );
}
