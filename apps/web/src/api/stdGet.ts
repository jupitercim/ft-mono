import { APINames, APIParamsType, Apis, JSONResponse } from './api.def';
import { Envs } from '@/env';
import { Maybe } from '@/utils';

export async function stdGet<NAME extends APINames, R>(
  apiName: NAME,
  params: APIParamsType<NAME>,
): Promise<Maybe<JSONResponse<R>>> {
  const { url } = Apis[apiName];
  const searchParams = new URLSearchParams();
  // eslint-disable-next-line guard-for-in
  for (const key in params) {
    searchParams.append(key, String(params[key as keyof typeof params]));
  }

  let requestUrl = `${Envs.API_HOST}${url}`;
  if (searchParams.toString() !== '') {
    requestUrl = `${Envs.API_HOST}${url}?${searchParams.toString()}`;
  }

  const response = await fetch(requestUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    return Maybe.Nothing();
  }
  try {
    const json = (await response.json()) as JSONResponse<R>;
    return Maybe.Just(json);
  } catch (e) {
    return Maybe.Nothing();
  }
}