import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: ({ context, location }) => {
    const { isAuthenticated, user } = context.auth
    console.log('_authenticated -->', isAuthenticated, user)

    if (!isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href
        }
      })
    }

    return {
      username: context.auth.user
    }
  }
})
