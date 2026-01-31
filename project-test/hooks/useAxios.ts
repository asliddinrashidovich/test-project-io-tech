import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import api from "../lib/api";

type UseAxiosProps<T> = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  config?: AxiosRequestConfig;
  skip?: boolean;
};

type UseAxiosReturn<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
};

export function useAxios<T>({ url, method = "GET", body, config, skip = false }: UseAxiosProps<T>): UseAxiosReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(!skip);
  const [error, setError] = useState<string | null>(null);
  const [reloadFlag, setReloadFlag] = useState<number>(0);

  const refetch = () => setReloadFlag(prev => prev + 1);

  useEffect(() => {
    if (skip) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        let response: AxiosResponse<T>;
        switch (method) {
          case "GET":
            response = await api.get(url, config);
            break;
          case "POST":
            response = await api.post(url, body, config);
            break;
          case "PUT":
            response = await api.put(url, body, config);
            break;
          case "DELETE":
            response = await api.delete(url, config);
            break;
          default:
            throw new Error("Unsupported method");
        }
        setData(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, body, config, reloadFlag, skip]);

  return { data, loading, error, refetch };
}
