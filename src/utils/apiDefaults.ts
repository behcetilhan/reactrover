import axios, { AxiosError, AxiosResponse } from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'

export const backendURL = import.meta.env.VITE_BACKEND_ENDPOINT

if (!backendURL) {
  console.error('BACKEND_ENDPOINT must be set. Please copy .env.dist to .env')
}

export const axiosBase = axios.create({
  withCredentials: true,
  baseURL: backendURL
})

export interface TokenResponse {
  accessToken: string
}

export let tokenGlobal: string | undefined = undefined

export const getRefreshToken = async () => {
  if (tokenGlobal) {
    return tokenGlobal
  }

  try {
    const refreshedToken =
      await axiosBase.post<TokenResponse>('/public/refresh')

    return refreshedToken.data.accessToken
  } catch (err) {
    console.error('error getRefreshToken', err)
  }
}

export const setAuthToken = (token: string | undefined) => {
  tokenGlobal = token
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
