import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { buildImageSrc } from "../helpers";

import Layout from "../components/Layout";
import TrackTable from "../components/TrackTable";

import SpotifyService from "../services/SpotifyService";

export default function AlbumItem() {
  const {
    state: { album },
  } = useLocation();

  const [tracks, setTracks] = useState([]);

  new SpotifyService()
    .getAlbumTracks(album.id)
    .then((tracks) => setTracks(tracks));

  return (
    <Layout
      title={album.name}
      subtitle="Tracks"
      imageSrc={buildImageSrc(album.images)}
    >
      <TrackTable tracks={tracks} />
    </Layout>
  );
}
