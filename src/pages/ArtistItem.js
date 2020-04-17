import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import { buildImageSrc } from "../helpers";

import Layout from "../components/Layout";
import AlbumTable from "../components/AlbumTable";

import SpotifyService from "../services/SpotifyService";

export default function ArtistItem() {
  const {
    state: { artist },
  } = useLocation();

  const { id } = useParams();

  const [albums, setAlbumns] = useState([]);

  useEffect(() => {
    new SpotifyService()
      .getArtistAlbums(id)
      .then((albums) => setAlbumns(albums));
  }, [id]);

  return (
    <Layout
      title={artist.name}
      subtitle="Albums"
      imageSrc={buildImageSrc(artist.images)}
    >
      <AlbumTable albums={albums} />
    </Layout>
  );
}
