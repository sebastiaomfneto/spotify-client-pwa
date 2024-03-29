import React from 'react';
import { Link } from 'react-router-dom';

import { Table, FavoriteButton } from '../../../components';
import { buildImageSrc } from '../../../helpers';
import { buildArtist, buildAvailability } from '../helpers';

export function AlbumTable({ albums = [] }) {
  return (
    <Table columns={['', 'Image', 'Name', 'Artist', 'Availability']}>
      {albums.map((album) => (
        <tr key={album.id}>
          <td>
            <FavoriteButton id={album.id} />
          </td>
          <td>
            <img
              src={buildImageSrc(album.images)}
              alt="album"
              width="20px"
              height="20px"
            />
          </td>
          <td>
            <Link
              to={{
                pathname: `/albums/${album.id}`,
                state: { album },
              }}
            >
              {album.name}
            </Link>
          </td>
          <td>{buildArtist(album.artists)}</td>
          <td>{buildAvailability(album.available_markets)}</td>
        </tr>
      ))}
    </Table>
  );
}
