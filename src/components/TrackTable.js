import React from "react";

import Table from "../components/Table";

import { buildImageSrc, buildArtist, buildDuration } from "../helpers";

export default function TrackTable({ tracks = [] }) {
  return (
    <Table columns={["", "Image", "Name", "Artist", "Album", "Duration"]}>
      {tracks.map((track) => (
        <tr key={track.id}>
          <td></td>
          <td>
            <img
              src={buildImageSrc(track.album.images)}
              alt="track"
              width="20px"
              height="20px"
            />
          </td>
          <td>{track.name}</td>
          <td>{buildArtist(track.artists)}</td>
          <td>{track.album?.name}</td>
          <td>{buildDuration(track.duration_ms)}</td>
        </tr>
      ))}
    </Table>
  );
}
