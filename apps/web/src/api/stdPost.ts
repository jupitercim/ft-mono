import { Envs } from "@/env";
import { APIBodyType, APINames, Apis, JSONResponse, STDResponse } from "./api.def";
import { Maybe } from "@/utils";


export async function stdPost<NAME extends APINames, R>(
  apiName: NAME,
  data: APIBodyType<NAME>,
): Promise<Maybe<JSONResponse<R>>> {
  const { url } = Apis[apiName];
  const requestUrl = `${Envs.API_HOST}${url}`;

  const response = await fetch(requestUrl, {
    method: 'POST',
    body: JSON.stringify(data),
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