import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
import AlbumTable from "../components/AlbumTable";

import { getAlbums } from "../services/SpotifyService";

export default function AlbumList() {
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums()
      .then((albums) => setAlbums(albums))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Layout title="Albums" loading={loading}>
      <AlbumTable albums={albums} />
    </Layout>
  );
}
