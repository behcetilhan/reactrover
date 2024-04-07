import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { AuthContextProps } from 'utils/AuthContext'

interface RouterContextProps {
  auth: AuthContextProps
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContextProps>()({
  component: () => (
    <div>
      <span>root itself</span>
      <hr />
      <Outlet />
    </div>
  )
})
