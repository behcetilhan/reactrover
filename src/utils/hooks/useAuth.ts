import { useContext } from 'react'
import { AppContext } from '@/utils/AppContext'

export const useAuth = () => {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }

  return context
}
