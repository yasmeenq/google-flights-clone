import axios from "axios";
import { appConfig } from "../Utils/AppConfig";

export const apiClient = axios.create({
  baseURL: appConfig.baseUrl,
  headers: appConfig.headers,
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (response) => response.data?.data || response.data,
  (error) => {
    throw new Error(error.response?.data?.message || "API request failed");
  }
);