import { useEffect, useState } from 'react';

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const fetchedData = await response.json();
        setData(fetchedData);
        setError(null);
      } catch (e: unknown) {
        const error = e as Error;
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { isLoading, data, error };
};
