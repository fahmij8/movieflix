import { useEffect, useState } from "react";
import axios, { Method } from "axios";

interface UseAxiosProps {
  url: string;
  method: Method;
  body?: any;
  shouldFetch?: boolean;
}

const useAxios = ({
  url,
  method,
  body,
  shouldFetch
}: UseAxiosProps): [boolean, string, any | null] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios({
          url,
          method,
          data: body
        });
        const data = response?.data;
        setData(data);
      } catch (error: any) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (shouldFetch) {
      fetchData()
        .then((r) => r)
        .catch(() => {});
    } else {
      setLoading(false);
    }
  }, [url]);

  return [loading, error, data];
};

export { useAxios };
