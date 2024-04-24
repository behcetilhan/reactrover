import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query'
import { axiosBase } from '@/utils/apiDefaults'

const fetchData = async <T>(endpoint: string): Promise<T> => {
  const { data } = await axiosBase.get<T>(endpoint)
  return data
}

export const useApi = <TData = unknown, TError = Error>(
  endpoint: string,
  options?: UseQueryOptions<TData, TError, TData, QueryKey>
) => {
  return useQuery<TData, TError>({
    queryKey: [endpoint],
    queryFn: () => fetchData<TData>(endpoint),
    ...options
  })
}
