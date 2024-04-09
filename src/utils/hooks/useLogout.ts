import { useMutation } from '@tanstack/react-query'
import { axiosBase, setAuthToken } from '@/utils/apiDefaults'
import type { CustomAxiosRequestConfig } from 'axios-auth-refresh/dist/utils'
import { useAppContext } from '@/utils/hooks/useAppContext'
import { useRouter } from '@tanstack/react-router'

export const useLogout = () => {
  const { setUser } = useAppContext()
  const router = useRouter()

  const customAxiosRequestConfig: CustomAxiosRequestConfig = {
    skipAuthRefresh: true
  }

  return useMutation({
    mutationFn: () => axiosBase.post('/logout', {}, customAxiosRequestConfig),
    onSuccess: () => {
      setUser(null)
      localStorage.removeItem('user')
      setAuthToken(undefined)
      router.history.push('/login')
    }
  })
}
