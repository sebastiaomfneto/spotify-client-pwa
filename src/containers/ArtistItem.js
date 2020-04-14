import React from "react";
import { useLocation } from "react-router-dom";

import { buildImageSrc } from "../helpers";

import Container from "../components/Container";
import AlbumTable from "../components/AlbumTable";

export default function ArtistItem() {
  const {
    state: { artist },
  } = useLocation();

  const albums = [];

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
