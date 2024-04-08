import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import useSWR, { SWRConfiguration, SWRResponse } from "swr";
import { config } from "../config";

interface Return<Data, Error>
  extends Pick<
    SWRResponse<AxiosResponse<Data>, AxiosError<Error>>,
    "isValidating" | "isLoading" | "error" | "mutate"
  > {
  data: Data | undefined;
  response: AxiosResponse<Data> | undefined;
}

type TGetRequest = AxiosRequestConfig | null;

interface IConfig<Data = unknown, Error = unknown>
  extends Omit<
    SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>,
    "fallbackData"
  > {
  fallbackData?: Data;
}

const host = config.host.api;
axios.defaults.baseURL = host;

export function useRequest<Data = unknown, Error = unknown>(
  request: TGetRequest,
  { fallbackData, ...config }: IConfig<Data, Error> = {}
): Return<Data, Error> {
  const {
    data: response,
    error,
    isValidating,
    isLoading,
    mutate,
  } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(
    request,
    () => axios.request<Data>(request!),
    {
      ...config,
      fallbackData:
        fallbackData &&
        ({
          status: 200,
          statusText: "InitialData",
          config: request!,
          headers: {},
          data: fallbackData,
        } as AxiosResponse<Data>),
    }
  );

  return {
    data: response && response.data,
    response,
    error,
    isValidating,
    isLoading,
    mutate,
  };
}
