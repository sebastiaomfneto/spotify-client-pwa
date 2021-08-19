import { useEffect } from 'react';

import * as StorageService from '../services/StorageService';

export function usePersistedStorage(key, state) {
  useEffect(() => {
    StorageService.setItem(key, state);
  }, [key, state]);
}
