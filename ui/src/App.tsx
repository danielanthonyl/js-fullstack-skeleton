import { useCallback, useEffect, useState } from "react";
import { api } from "./axios/instances";
import { AxiosError } from "axios";

type Response = {
  data: null | object;
  error: null | string;
  loading: boolean;
};

export const App = () => {
  const [response, setResponse] = useState<Response>({
    data: null,
    error: null,
    loading: false,
  });

  const makeRequest = useCallback(async () => {
    try {
      setResponse({ ...response, loading: true });
      const { data } = await api.get("/");

      setResponse({ ...response, data, loading: false });
    } catch (error) {
      const axiosError = error as AxiosError;

      setResponse({
        ...response,
        error: axiosError.response?.data as null,
        loading: false,
      });
    }
  }, []);

  useEffect(() => {
    makeRequest();
  }, [makeRequest]);

  const { data, error, loading } = response;

  if (loading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>error...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <p>no data...</p>
      </div>
    );
  }

  return (
    <div>
      <p>{JSON.stringify(response.data)}</p>
    </div>
  );
};
