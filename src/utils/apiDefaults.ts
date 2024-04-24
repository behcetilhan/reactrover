import axios, { AxiosError, AxiosResponse } from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'

export const axiosBase = axios.create({
  withCredentials: true,
  baseURL: 'https://localhost:3001'
})

export interface TokenResponse {
  accessToken: string
}

export const setAuthToken = (token: string | null) => {
  if (token) {
    axiosBase.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete axiosBase.defaults.headers.common['Authorization']
  }
}

export const refreshAuth = async (failedRequest: AxiosError) => {
  return axiosBase
    .post<TokenResponse>('/public/refresh')
    .then((tokenRefreshResponse: AxiosResponse<TokenResponse>) => {
      const newAccessToken = tokenRefreshResponse.data.accessToken
      setAuthToken(newAccessToken)

      if (failedRequest.response && failedRequest.response.config) {
        failedRequest.response.config.headers['Authorization'] =
          `Bearer ${newAccessToken}`
      }
      return Promise.resolve()
    })
}

createAuthRefreshInterceptor(axiosBase, refreshAuth)
