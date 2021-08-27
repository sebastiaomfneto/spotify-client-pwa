import React from 'react';
import { Link } from 'react-router-dom';

import { Table, FavoriteButton } from '../../../components';
import { buildImageSrc } from '../../../helpers';
import { buildPopularity } from '../helpers';

export function ArtistTable({ artists = [] }) {
  return (
    <Table columns={['', 'Image', 'Name', 'Genres', 'Popularity']}>
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
          <td>{artist.genres.join(', ')}</td>
          <td>{buildPopularity(artist.followers.total)}</td>
        </tr>
      ))}
    </Table>
  );
}
