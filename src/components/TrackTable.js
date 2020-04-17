import React from "react";

import Table from "../components/Table";
import FavoriteButton from "../components/FavoriteButton";

import { buildImageSrc } from "../helpers";

export function buildArtist(artists = []) {
  return artists.map((a) => a.name).join(", ");
}

export function buildDuration(ms = 0) {
  const min = (ms / 1000 / 60) << 0;
  let sec = (ms / 1000) % 60 << 0;

  if (sec < 10) {
    sec = sec.toString() + "0";
  }

  return `${min}:${sec}`;
}

export default function TrackTable({ album, tracks = [] }) {
  return (
    <Table columns={["", "Album Image", "Name", "Artist", "Album", "Duration"]}>
      {tracks.map((track) => (
        <tr key={track.id}>
          <td>
            <FavoriteButton id={track.id} />
          </td>
          <td>
            <img
              src={buildImageSrc(track.album?.images ?? album.images)}
              alt="track"
              width="20px"
              height="20px"
            />
          </td>
          <td>{track.name}</td>
          <td>{buildArtist(track.artists)}</td>
          <td>{track.album?.name ?? album.name}</td>
          <td>{buildDuration(track.duration_ms)}</td>
        </tr>
      ))}
    </Table>
  );
}
