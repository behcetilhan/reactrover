import { PropsWithChildren, useEffect, useMemo, useState } from 'react'
import { AppContext, User } from '@/utils/AppContext'

export const AppProvider = (props: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user
  const persistedUserInfo = localStorage.getItem('user')

  useEffect(() => {
    if (persistedUserInfo) {
      setUser(JSON.parse(persistedUserInfo))
    }
  }, [persistedUserInfo])

  /*  const initializeAuth = useCallback(async () => {
      if (!persistedUserInfo) {
        return
      }
      try {
        const response = await axiosBase.post('/public/refresh')
        const { accessToken } = response.data
  
        setAuthToken(accessToken)
  
        setUser({
          accessToken: accessToken,
          ...(persistedUserInfo && JSON.parse(persistedUserInfo))
        })
      } catch (err) {
        console.log('err', err)
      }
    }, [persistedUserInfo])
  
    useEffect(() => {
      initializeAuth()
    }, [initializeAuth])*/

  const value = useMemo(
    () => ({ isAuthenticated, user, setUser }),
    [isAuthenticated, user]
  )

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  )
}
