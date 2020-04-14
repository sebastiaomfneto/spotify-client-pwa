import React from "react";
import { useLocation } from "react-router-dom";

import { buildImageSrc } from "../helpers";

import Container from "../components/Container";
import TrackTable from "../components/TrackTable";

export default function AlbumItem() {
  const {
    state: { album },
  } = useLocation();

  const tracks = [];

  return (
    <Container
      title={album.name}
      subtitle="Tracks"
      imageSrc={buildImageSrc(album.images)}
    >
      <TrackTable tracks={tracks} />
    </Container>
  );
}
