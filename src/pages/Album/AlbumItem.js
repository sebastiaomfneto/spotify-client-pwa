import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import { buildImageSrc } from "../../helpers";

import { Layout } from "../../components/Layout";
import { TrackTable } from "../../components/Table";

import { SpotifyService } from "../../services/SpotifyService";

export function AlbumItem() {
  const {
    state: { album },
  } = useLocation();

  const { id } = useParams();

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    new SpotifyService().getAlbumTracks(id).then((tracks) => setTracks(tracks));
  }, [id]);

  return (
    <Layout
      title={album.name}
      subtitle="Tracks"
      imageSrc={buildImageSrc(album.images)}
    >
      <TrackTable album={album} tracks={tracks} />
    </Layout>
  );
}
