import { createContext, PropsWithChildren, useMemo, useState } from 'react'

export interface User {
  username: string
  password: string
}

export interface AppContextProps {
  isAuthenticated: boolean
  setUser: (user: User | null) => void
  user: User | null
}

const appInitials: AppContextProps = {
  isAuthenticated: false,
  setUser: () => {},
  user: null
}

export const AppContext = createContext<AppContextProps>(appInitials)

export const AppProvider = (props: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user

  const value = useMemo(
    () => ({ isAuthenticated, user, setUser }),
    [isAuthenticated, user]
  )

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  )
}
