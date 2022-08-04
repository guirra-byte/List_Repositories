import axios from 'axios';
import { useState, useEffect } from 'react';

export function useRequest<T = unknown>(url: string) {

  const [data, setData] = useState<null | T>(null);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data);
      });
  }, []);

  return { data };
}