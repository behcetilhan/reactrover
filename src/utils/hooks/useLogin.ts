import { useMutation } from '@tanstack/react-query'
import { LoginRequestProps, LoginResponseProps } from '@/utils/AppContext'
import { axiosBase, setAuthToken } from '@/utils/apiDefaults'
import { useAppContext } from '@/utils/hooks/useAppContext'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import type { CustomAxiosRequestConfig } from 'axios-auth-refresh/dist/utils'
import { useRouter } from '@tanstack/react-router'

interface ErrorResponse {
  error: string
}

export const useLogin = () => {
  const { setUser } = useAppContext()
  const router = useRouter()

  const customAxiosRequestConfig: CustomAxiosRequestConfig = {
    skipAuthRefresh: true
  }

  return useMutation({
    mutationFn: ({ username, password }: LoginRequestProps) => {
      return axiosBase.post<LoginResponseProps>(
        '/login',
        { username, password },
        customAxiosRequestConfig
      )
    },
    onSuccess: (res) => {
      const { username, userId, accessToken, avatarURL } = res.data

      const userData = {
        username,
        userId,
        avatarURL
      }

      localStorage.setItem('user', JSON.stringify(userData))

      setUser(userData)

      setAuthToken(accessToken)
      router.history.push('/dashboard')
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
