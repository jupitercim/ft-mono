import { APIBodyType, APINames, APIParamsType } from "@/api/api.def";
import { stdPost } from "@/api/stdPost";
import { useCallback, useState } from "react";
import { useSnackbar } from 'notistack'
import { stdGet } from "@/api/stdGet";

interface GetOptions {
}
export const useGet = () => {

  const [loading, setLoading] = useState(false)
  const get = useCallback(async <T extends APINames, R>(api: T, data: APIParamsType<T>, options?: GetOptions) => {
    setLoading(true)
    const result = await stdGet<T, R>(api, data)
    return result
  }, [])

  return [loading, get] as [boolean, typeof get]
}
