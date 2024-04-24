import { createContext } from 'react'

export interface User {
  username: string
  accessToken: string
  userId: number
}

export interface LoginRequestProps {
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
