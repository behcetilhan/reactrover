import { Button, Container } from '@mui/material'
import { useNavigate } from '@tanstack/react-router'

export const ProfileComponent = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <div>Another protected route example</div>
      <Button
        sx={{ mt: 2 }}
        variant={'contained'}
        onClick={() => navigate({ to: '/dashboard' })}
      >
        return to dashboard
      </Button>
    </Container>
  )
}
