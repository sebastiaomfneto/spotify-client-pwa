import React, { useEffect, useContext } from 'react';

import { SearchContext } from '../../../contexts';
import { PageLayout } from '../../../components';
import { useAsync } from '../../../hooks';
import * as SpotifyService from '../../../services/SpotifyService';
import { TrackTable } from './TrackTable';

export function TrackListPage() {
  const { state: search } = useContext(SearchContext);

  const { perform, loading, data } = useAsync(SpotifyService.getTracks, []);

  useEffect(() => {
    if (search) {
      perform(search);
    }
  }, [search, perform]);

  return (
    <PageLayout title="Tracks" loading={loading}>
      <TrackTable tracks={data} />
    </PageLayout>
  );
}
