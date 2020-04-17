import React, { useState, useEffect, useContext } from "react";

import { Layout } from "../../components/Layout";
import { AlbumTable } from "../../components/Table";

import { SearchContext } from "../../contexts/SearchContext";

import { SpotifyService } from "../../services/SpotifyService";

export function AlbumList() {
  const { search } = useContext(SearchContext);

  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (search) {
      setLoading(true);

      new SpotifyService()
        .getAlbums(search)
        .then((albums) => setAlbums(albums))
        .finally(() => setLoading(false));
    } else {
      setAlbums([]);
    }
  }, [search]);

  return (
    <Layout title="Albums" loading={loading}>
      <AlbumTable albums={albums} />
    </Layout>
  );
}
