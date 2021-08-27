import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { PageLayout } from '../../../components';
import { useAsync } from '../../../hooks';
import * as SpotifyService from '../../../services/SpotifyService';
import { buildImageSrc } from '../../../helpers';
import { TrackTable } from '../../../features/Track';

export function AlbumItemPage() {
  const { state: { album } = {} } = useLocation();

  const { id } = useParams();

  const { perform, data } = useAsync(SpotifyService.getAlbumTracks, []);

  useEffect(() => {
    perform(id);
  }, [id, perform]);

  return (
    <PageLayout
      title={album?.name}
      subtitle="Tracks"
      imageSrc={buildImageSrc(album?.images)}
    >
      <TrackTable album={album} tracks={data} />
    </PageLayout>
  );
}
