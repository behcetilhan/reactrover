import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { AppContextProps } from '@/utils/AppContext'
import { Typography } from '@mui/material'

export interface RouterContextProps {
  auth: AppContextProps
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContextProps>()({
  component: () => (
    <div>
      <Typography>root component</Typography>
      <hr />
      <Outlet />
    </div>
  )
})
