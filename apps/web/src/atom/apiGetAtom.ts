import { APINames, APIParamsType, STDResponse } from "@/api/api.def";
import { stdGet } from "@/api/stdGet";
import { Atom, atom } from "jotai";

type GETAPIParams<T extends APINames> = {
  apiName: T;
  params: APIParamsType<T>;
}


const cache = new Map<string, Atom<Promise<STDResponse<any>>>>();

export const apiGetAtom = <T extends APINames, R>(params: GETAPIParams<T>) => {

  const hash = JSON.stringify(params);
  if(cache.has(hash)) {
    return cache.get(hash) as Atom<Promise<STDResponse<R>>>;
  }

  const cachedAtom = atom(async () => {
    return stdGet(params.apiName, params.params)
  })

  cache.set(hash, cachedAtom);
  return cachedAtom
}

