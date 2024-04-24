import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  createRouter,
  ErrorComponent,
  RouterProvider
} from '@tanstack/react-router'
import { useAuth } from '@/utils/hooks/useAuth'
import { routeTree } from '@/routeTree.gen'
import { useEffect } from 'react'

const queryClient = new QueryClient()

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
    queryClient
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  defaultPendingComponent: () => <span>...loading...</span>,
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
  defaultNotFoundComponent: () => <span>is a 404</span>
})

export const App = () => {
  const auth = useAuth()

  useEffect(() => {
    router.invalidate()
  }, [auth])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} context={{ auth }} />
    </QueryClientProvider>
  )
}
