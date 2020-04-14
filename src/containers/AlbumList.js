import React from "react";

import Container from "../components/Container";
import AlbumTable from "../components/AlbumTable";

export default function AlbumList() {
  const albums = [];

  return (
    <Container title="Albums">
      <AlbumTable albums={albums} />
    </Container>
  );
}
