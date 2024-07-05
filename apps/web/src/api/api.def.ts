import { Maybe, Maybe as OriginalMaybe } from "@/utils/Maybe";

export type JSONResponse<T> = {
  data: T
  message: string
  success: boolean
  code: string
}
export type STDResponse<T> = Maybe<JSONResponse<T>>;

export interface ContactPostData {
  email: string,
  file: string,
  message: string,
  name: string,
  remark: string 
}

export const Apis = {
  uploadContact: {
    url: '/v1/public/ft/contact',
    method: "POST",
    body: {} as ContactPostData
  }, 
  other: {
    url: "/v2/xxx",
    method: "POST",
    body: {} as any
  },
  query: {
    url: "/v1/public/ft/event/query",
    method: "GET",
    params: {} as {id: string, name: string}
  }
} as const

export type APINames = keyof typeof Apis;
export type APIBodyType<T extends APINames> =
  'body' extends keyof typeof Apis[T] ? typeof Apis[T]['body'] : never;
export type APIParamsType<T extends APINames> =
  'params' extends keyof typeof Apis[T] ? typeof Apis[T]['params'] : never;

export const isSuccess = <T>(response: Maybe<JSONResponse<T>>): boolean => {
  return response.isJust() && response.unwrap().success;
};


