import { createFileRoute, redirect } from '@tanstack/react-router'
import { getRefreshToken, setAuthToken, tokenGlobal } from '@/utils/apiDefaults'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ context, location }) => {
    const { setUser } = context.auth
    const persistedUserInfo = localStorage.getItem('user')

    if (!persistedUserInfo) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href
        }
      })
    }

    try {
      const accessToken = await getRefreshToken()

      if (tokenGlobal !== accessToken) {
        setAuthToken(accessToken)
      }

      setUser({
        ...(persistedUserInfo && JSON.parse(persistedUserInfo))
      })
    } catch (err) {
      console.error('err', err)
      redirect({ to: '/login' })
    }

    return {
      username: context.auth.user
    }
  }
})
