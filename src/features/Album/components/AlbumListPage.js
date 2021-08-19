import React, { useEffect, useContext } from 'react';

import { PageLayout } from '../../../components';
import { SearchContext } from '../../../contexts';
import { useAsync } from '../../../hooks';
import * as SpotifyService from '../../../services/SpotifyService';
import { AlbumTable } from './AlbumTable';

export function AlbumListPage() {
  const { state: search } = useContext(SearchContext);

  const { perform, loading, data } = useAsync(SpotifyService.getAlbums, []);

  useEffect(() => {
    if (search) {
      perform(search);
    }
  }, [search, perform]);

  return (
    <PageLayout title="Albums" loading={loading}>
      <AlbumTable albums={data} />
    </PageLayout>
  );
}
