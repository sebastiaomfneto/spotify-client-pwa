import React, { useState, useEffect } from "react";

import Container from "../components/Container";
import AlbumTable from "../components/AlbumTable";

import { getAlbums } from "../services/SpotifyService";

export default function AlbumList() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums().then((albums) => setAlbums(albums));
  });

  return (
    <Container title="Albums">
      <AlbumTable albums={albums} />
    </Container>
  );
}
