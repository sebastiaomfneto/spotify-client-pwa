import React from "react";
import { Link } from "react-router-dom";

import Table from "../components/Table";

import { buildImageSrc, buildGenresList, buildPopularity } from "../helpers";

export default function ArtistTable({ artists = [] }) {
  return (
    <Table columns={["", "Image", "Name", "Genres", "Popularity"]}>
      {artists.map((artist) => (
        <tr key={artist.id}>
          <td></td>
          <td>
            <img
              src={buildImageSrc(artist.images)}
              alt="artist"
              width="20px"
              height="20px"
            />
          </td>
          <td>
            <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
          </td>
          <td>{buildGenresList(artist.genres)}</td>
          <td>{buildPopularity(artist.followers.total)}</td>
        </tr>
      ))}
    </Table>
  );
}
