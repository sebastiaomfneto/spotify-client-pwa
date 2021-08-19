import React, { useEffect, useContext } from 'react';

import { SearchContext } from '../../../contexts';
import { PageLayout } from '../../../components';
import { useAsync } from '../../../hooks';
import * as SpotifyService from '../../../services/SpotifyService';
import { ArtistTable } from './ArtistTable';

export function ArtistListPage() {
  const { state: search } = useContext(SearchContext);

  const { perform, loading, data } = useAsync(SpotifyService.getArtists, []);

  useEffect(() => {
    if (search) {
      perform(search);
    }
  }, [search, perform]);

  return (
    <PageLayout title="Artists" loading={loading}>
      <ArtistTable artists={data} />
    </PageLayout>
  );
}
