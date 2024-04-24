import { Button, Stack } from '@mui/material'
import { useNavigate } from '@tanstack/react-router'
import { useAuth } from '@/utils/hooks/useAuth'
import { useLogout } from '@/utils/hooks/useLogout'
import { useApi } from '@/utils/hooks/useApi'

interface ProtectedDataProps {
  id: number
  secret: string
  userId: number
}

export const DashboardComponent = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const { mutate: logout } = useLogout()

  const { data, refetch } = useApi<ProtectedDataProps, Error>('/protected', {
    queryKey: ['protectedDataExample'],
    enabled: !!user
  })

  return (
    <>
      <div>dashboard user: {user?.username}</div>
      <div>{data?.secret}</div>
      <Stack gap={4} direction={'row'}>
        <Button
          variant={'contained'}
          onClick={() => navigate({ to: '/profile' })}
        >
          to profile
        </Button>
        <Button variant={'outlined'} onClick={() => logout()}>
          log out
        </Button>
        <Button onClick={() => refetch()}>fetch</Button>
      </Stack>
    </>
  )
}
