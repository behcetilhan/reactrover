import { Router, RouterProvider } from '@tanstack/react-router'
import { useAppContext } from '@/utils/hooks/useAppContext'

export const App = ({ router }: { router: Router }) => {
  const auth = useAppContext()

  return <RouterProvider router={router} context={{ auth }} />
}
