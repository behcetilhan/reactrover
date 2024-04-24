import { useMutation } from '@tanstack/react-query'
import { LoginRequestProps, User } from '@/utils/AppContext'
import { axiosBase, setAuthToken } from '@/utils/apiDefaults'
import { useAuth } from '@/utils/hooks/useAuth'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import type { CustomAxiosRequestConfig } from 'axios-auth-refresh/dist/utils'

interface ErrorResponse {
  error: string
}

export const useLogin = () => {
  const { setUser } = useAuth()

  const customAxiosRequestConfig: CustomAxiosRequestConfig = {
    skipAuthRefresh: true
  }

  return useMutation({
    mutationFn: ({ username, password }: LoginRequestProps) => {
      return axiosBase.post<User>(
        '/login',
        { username, password },
        customAxiosRequestConfig
      )
    },
    onSuccess: (res) => {
      const { username, userId, accessToken } = res.data

      const userData = {
        username,
        userId
      }

      localStorage.setItem('user', JSON.stringify(userData))

      setUser({
        username,
        accessToken,
        userId
      })

      setAuthToken(accessToken)
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      let errMsg = 'Network Error'

      if (err.response && err.response.status === 401) {
        errMsg = err.response.data.error
      }

      toast.error(errMsg)
    }
  })
}
