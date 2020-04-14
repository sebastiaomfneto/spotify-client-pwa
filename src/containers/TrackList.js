import React from "react";
import { Link } from "react-router-dom";

import Container from "../components/Container";
import Table from "../components/Table";

import { buildImageSrc, buildArtist, buildDuration } from "../helpers";

function TrackList() {
  const tracks = [];

  return (
    <Container title="Tracks">
      <Table columns={["", "Image", "Name", "Artist", "Album", "Duration"]}>
        {tracks.map((track) => (
          <tr key={track.id}>
            <td></td>
            <td>
              <img
                src={buildImageSrc(track.images)}
                alt="track"
                width="20px"
                height="20px"
              />
            </td>
            <td>
              <Link to={`/tracks/${track.id}`}>{track.name}</Link>
            </td>
            <td>{buildArtist(track.artists)}</td>
            <td>{track.album?.name}</td>
            <td>{buildDuration(track.duration_ms)}</td>
          </tr>
        ))}
      </Table>
    </Container>
  );
}

export default TrackList;
