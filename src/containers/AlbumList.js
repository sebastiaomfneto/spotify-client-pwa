import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
import AlbumTable from "../components/AlbumTable";

import { getAlbums } from "../services/SpotifyService";

export default function AlbumList() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums().then((albums) => setAlbums(albums));
  });

  return (
    <Layout title="Albums">
      <AlbumTable albums={albums} />
    </Layout>
  );
}
