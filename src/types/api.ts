export enum AxiosMethod {
  Get = "get",
  Post = "post",
  Put = "put",
  Patch = "patch",
  Delete = "delete",
}

export interface ApiRequestConfig {
  method: AxiosMethod;
  path: string;
  data: never;
}
