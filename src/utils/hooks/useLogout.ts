import { useMutation } from '@tanstack/react-query'
import { axiosBase, setAuthToken } from '@/utils/apiDefaults'
import type { CustomAxiosRequestConfig } from 'axios-auth-refresh/dist/utils'
import { useAuth } from '@/utils/hooks/useAuth'

export const useLogout = () => {
  const { setUser } = useAuth()

  const customAxiosRequestConfig: CustomAxiosRequestConfig = {
    skipAuthRefresh: true
  }

  return useMutation({
    mutationFn: () => axiosBase.post('/logout', {}, customAxiosRequestConfig),
    onSuccess: () => {
      setUser(null)
      localStorage.removeItem('user')
      setAuthToken(null)
    }
  })
}
