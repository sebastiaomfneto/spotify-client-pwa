import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { PageLayout } from '../../../components';
import { useAsync } from '../../../hooks';
import * as SpotifyService from '../../../services/SpotifyService';
import { buildImageSrc } from '../../../helpers';
import { AlbumTable } from '../../../features/Album';

export function ArtistItemPage() {
  const {
    state: { artist },
  } = useLocation();

  const { id } = useParams();

  const { perform, data } = useAsync(SpotifyService.getArtistAlbums);

  useEffect(() => {
    perform(id);
  }, [id, perform]);

  return (
    <PageLayout
      title={artist.name}
      subtitle="Albums"
      imageSrc={buildImageSrc(artist.images)}
    >
      <AlbumTable albums={data} />
    </PageLayout>
  );
}
