import { AxiosInstance, AxiosResponse } from "axios";

export default interface ClientInterface {
  httpClient?: AxiosInstance;

  search: (params: {}) => Promise<AxiosResponse<any, any>>;
  videos: (params: {}) => Promise<AxiosResponse<any, any>>;
  channels: (params: {}) => Promise<AxiosResponse<any, any>>;
}
