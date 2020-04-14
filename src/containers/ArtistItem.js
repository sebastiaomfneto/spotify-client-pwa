import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { buildImageSrc } from "../helpers";

import Container from "../components/Container";
import AlbumTable from "../components/AlbumTable";

import { getArtistAlbums } from "../services/SpotifyService";

export default function ArtistItem() {
  const {
    state: { artist },
  } = useLocation();

  const [albums, setAlbumns] = useState([]);

  getArtistAlbums(artist.id).then((albums) => setAlbumns(albums));

  return (
    <Container
      title={artist.name}
      subtitle="Albums"
      imageSrc={buildImageSrc(artist.images)}
    >
      <AlbumTable albums={albums} />
    </Container>
  );
}
