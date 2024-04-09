import { PropsWithChildren, useMemo, useState } from 'react'
import { AppContext, User } from '@/utils/AppContext'

export const AppProvider = (props: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null)

  const value = useMemo(
    () => ({
      user,
      setUser
    }),
    [user]
  )

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  )
}
