import axios from "axios";
import { LOCAL_STORAGE_TOKEN_FIELD } from "@/settings/auth";
import { isTestEnvironment } from "@/helpers";
import { API_ROUTES } from "@/settings/api";

const AXIOS_METHODS = {
  get: "get",
  post: "post",
  put: "put",
  patch: "patch",
  delete: "delete",
};

export const apiRequest = async (config) => {
  let method = AXIOS_METHODS.get;
  if (config.method) {
    method = config.method.toLowerCase();
    if (!AXIOS_METHODS[method]) {
      console.error("Axios method not found:", method);
    }
  }
  const url = `${process.env.VUE_APP_API_HOST}${process.env.VUE_APP_API_PATH}${config.path}`;
  const data = config.data || {};
  let headers = {};
  const bearerToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_FIELD);
  if (bearerToken) {
    headers = { Authorization: `Bearer ${bearerToken}` };
  }
  let configAxios;
  if (method === AXIOS_METHODS.get || method === AXIOS_METHODS.delete) {
    configAxios = { params: data, headers };
  } else {
    configAxios = { headers };
  }
  let res;
  try {
    if (method === AXIOS_METHODS.post) {
      res = await axios.post(url, data, configAxios);
    } else if (method === AXIOS_METHODS.put) {
      res = await axios.put(url, data, configAxios);
    } else if (method === AXIOS_METHODS.patch) {
      res = await axios.put(url, data, configAxios);
    } else if (method === AXIOS_METHODS.delete) {
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

export const notifySiteOwner = async (text) => {
  const data = {
    text: text,
    mode: isTestEnvironment() ? "test" : "prod",
  };
  return await apiRequest({
    path: API_ROUTES.TELEGRAM_SEND,
    data,
  });
};
