import { APINames, APIParamsType } from "@/api/api.def";
import { useCallback, useState } from "react";
import { stdGet } from "@/api/stdGet";

export const useGet = () => {

  const [loading, setLoading] = useState(false)
  const get = useCallback(async <T extends APINames, R>(api: T, data: APIParamsType<T>) => {
    setLoading(true)
    const result = await stdGet<T, R>(api, data)
    return result
  }, [])

  return [loading, get] as [boolean, typeof get]
}
