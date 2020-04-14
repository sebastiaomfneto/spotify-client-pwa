import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { buildImageSrc } from "../helpers";

import Container from "../components/Container";
import TrackTable from "../components/TrackTable";

import { getAlbumTracks } from "../services/SpotifyService";

export default function AlbumItem() {
  const {
    state: { album },
  } = useLocation();

  const [tracks, setTracks] = useState([]);

  getAlbumTracks(album.id).then((tracks) => setTracks(tracks));

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
