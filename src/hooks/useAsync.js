import { useCallback, useState } from 'react';

export function useAsync(fn, initialData) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const perform = useCallback(
    (...args) => {
      setLoading(true);
      Promise.resolve(fn(...args))
        .then((resultData) => {
          setData(resultData);
        })
        .catch((resultError) => {
          setError(resultError);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [fn]
  );

  return {
    data,
    setData,
    loading,
    error,
    perform,
  };
}
