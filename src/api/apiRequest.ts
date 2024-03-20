import axios from "axios";

import { LocalStorageKeys } from "@/settings/localStorage";
import type { ApiRequestConfig } from "@/types/api";
import { AxiosMethod } from "@/types/api";

export const apiRequest = async (config: ApiRequestConfig) => {
  const url = `${import.meta.env.VITE_APP_API_HOST}${import.meta.env.VITE_APP_API_PATH}${config.path}`;

  const data = config.data || {};
  let headers = {};
  const bearerToken = localStorage.getItem(LocalStorageKeys.AuthToken);

  if (bearerToken) {
    headers = { Authorization: `Bearer ${bearerToken}` };
  }

  let configAxios;

  if (config.method === AxiosMethod.Get || config.method === AxiosMethod.Delete) {
    configAxios = { params: data, headers };
  } else {
    configAxios = { headers };
  }

  let res;

  try {
    if (config.method === AxiosMethod.Post) {
      res = await axios.post(url, data, configAxios);
    } else if (config.method === AxiosMethod.Put) {
      res = await axios.put(url, data, configAxios);
    } else if (config.method === AxiosMethod.Patch) {
      res = await axios.put(url, data, configAxios);
    } else if (config.method === AxiosMethod.Delete) {
      res = await axios.delete(url, configAxios);
    } else {
      res = await axios.get(url, configAxios);
    }
  } catch (e) {
    console.error("Axios error:", e);
    // TODO Need to add right toast call from here
    // this.toastError(Lang.UNKNOWN_ERROR);
  }
  return res.data;
};
