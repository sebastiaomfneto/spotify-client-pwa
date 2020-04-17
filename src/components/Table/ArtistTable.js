import React from "react";
import { Link } from "react-router-dom";

import { Table } from "./Table";
import { FavoriteButton } from "../FavoriteButton";

import { buildImageSrc } from "../../helpers";

function buildGenresList(genres = []) {
  return genres.join(", ");
}

function buildPopularity(followers = 0) {
  switch (true) {
    case followers > 80:
      return "Hot";
    case followers >= 60 && followers <= 79:
      return "Cool";
    case followers >= 30 && followers <= 59:
      return "Regular";
    case followers < 30:
      return "Underground";
    default:
      return "";
  }
}

export function ArtistTable({ artists = [] }) {
  return (
    <Table columns={["", "Image", "Name", "Genres", "Popularity"]}>
      {artists.map((artist) => (
        <tr key={artist.id}>
          <td>
            <FavoriteButton id={artist.id} />
          </td>
          <td>
            <img
              src={buildImageSrc(artist.images)}
              alt="artist"
              width="20px"
              height="20px"
            />
          </td>
          <td>
            <Link
              to={{
                pathname: `/artists/${artist.id}`,
                state: { artist },
              }}
            >
              {artist.name}
            </Link>
          </td>
          <td>{buildGenresList(artist.genres)}</td>
          <td>{buildPopularity(artist.followers.total)}</td>
        </tr>
      ))}
    </Table>
  );
}
