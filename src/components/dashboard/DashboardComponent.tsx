import { Avatar, Box, Button, Container, Stack } from '@mui/material'
import { useNavigate } from '@tanstack/react-router'
import { useAppContext } from '@/utils/hooks/useAppContext'
import { useLogout } from '@/utils/hooks/useLogout'
import { axiosBase } from '@/utils/apiDefaults'
import { useQuery } from '@tanstack/react-query'

interface ProtectedDataProps {
  id: number
  secret: string
  userId: number
}

export const DashboardComponent = () => {
  const { user } = useAppContext()
  const navigate = useNavigate()
  const { mutate: logout } = useLogout()

  const { data: protectedData, refetch } = useQuery({
    queryKey: ['protectedExample'],
    queryFn: async () => {
      return await axiosBase.get<ProtectedDataProps>('/protected')
    }
  })

  return (
    <Container>
      <Box sx={{ mb: 2 }}>Logged in User Info</Box>
      {user && (
        <Stack direction={'row'} alignItems={'center'} gap={1}>
          <Avatar src={user.avatarURL} alt={user.username} />
          <span>{user.username}</span>
        </Stack>
      )}
      <Box sx={{ py: 5 }}>{protectedData?.data.secret}</Box>
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
        <Button onClick={() => refetch()}>Re-fetch</Button>
      </Stack>
    </Container>
  )
}
