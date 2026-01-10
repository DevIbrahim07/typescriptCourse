import { useEffect, useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    const fetchData = async () => {
      setState({ data: null, loading: true, error: null });
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data: T = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error: any) {
        setState({ data: null, loading: false, error: error.message });
      }
    };
    fetchData();
  }, [url]);
  return state;
}
