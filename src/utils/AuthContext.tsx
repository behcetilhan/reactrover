import { createContext, PropsWithChildren, useMemo, useState } from 'react'

export interface User {
  username: string
  password: string
}

export interface AuthContextProps {
  isAuthenticated: boolean
  setUser: (user: User | null) => void
  user: User | null
}

const authInitials: AuthContextProps = {
  isAuthenticated: false,
  setUser: () => {},
  user: null
}

export const AuthContext = createContext<AuthContextProps>(authInitials)

export const AuthProvider = (props: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user

  const value = useMemo(
    () => ({ isAuthenticated, user, setUser }),
    [isAuthenticated, user]
  )

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  )
}
