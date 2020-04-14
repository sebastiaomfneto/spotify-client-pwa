import React from "react";
import { Link } from "react-router-dom";

import Container from "../components/Container";
import Table from "../components/Table";

import { buildImageSrc, buildArtist, buildAvailability } from "../helpers";

function AlbumList() {
  const albums = [];

  return (
    <Container title="Albums">
      <Table columns={["", "Image", "Name", "Artist", "Availability"]}>
        {albums.map((album) => (
          <tr key={album.id}>
            <td></td>
            <td>
              <img
                src={buildImageSrc(album.images)}
                alt="album"
                width="20px"
                height="20px"
              />
            </td>
            <td>
              <Link to={`/albums/${album.id}`}>{album.name}</Link>
            </td>
            <td>{buildArtist(album.artists)}</td>
            <td>{buildAvailability(album.available_markets)}</td>
          </tr>
        ))}
      </Table>
    </Container>
  );
}

export default AlbumList;
