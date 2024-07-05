import { APIBodyType, APINames } from "@/api/api.def";
import { stdPost } from "@/api/stdPost";
import { useCallback, useState } from "react";
import { useSnackbar } from 'notistack'

interface PostOptions {
  successMessage?: string
}
export const usePost = () => {

  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false)
  const post = useCallback(async <T extends APINames, R>(api: T, data: APIBodyType<T>, options?: PostOptions) => {

    const successMessage = options?.successMessage || 'Success'
    setLoading(true)
    const result = await stdPost(api, data)
    result.match({
      Just: (data) => {
        if(data.success) {
          enqueueSnackbar(successMessage, { variant: 'success' })
        } else {
          enqueueSnackbar(data.message, { variant: 'error' })
        }
        setLoading(false)
      },
      Nothing: () => {
        enqueueSnackbar('Some Error Occured', { variant: 'error' })
        setLoading(false)
      }
    })
    return result
  }, [])

  return [loading, post] as [boolean, typeof post]
}
