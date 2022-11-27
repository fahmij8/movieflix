import { useEffect, useState } from "react";
import axios, { Method } from "axios";

const useAxios = (
  url: string,
  method: Method,
  body?: any
): [boolean, string, any | null] => {
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

    fetchData()
      .then((r) => r)
      .catch(() => {});
  }, [url]);

  return [loading, error, data];
};

export { useAxios };
