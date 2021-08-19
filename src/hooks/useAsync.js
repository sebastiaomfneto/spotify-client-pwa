import { useCallback, useEffect, useRef, useState } from 'react';

export function useAsync(fn, initialData) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const mounted = useRef();

  const perform = useCallback(
    (...args) => {
      setLoading(true);
      Promise.resolve(fn(...args))
        .then((resultData) => {
          if (mounted.current) {
            setData(resultData);
          }
        })
        .catch((resultError) => {
          if (mounted.current) {
            setError(resultError);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [fn]
  );

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  return {
    data,
    setData,
    loading,
    error,
    perform,
  };
}
