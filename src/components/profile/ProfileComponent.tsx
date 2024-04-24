import { Button } from '@mui/material'
import { useNavigate } from '@tanstack/react-router'

export const ProfileComponent = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>profile page</div>
      <Button
        variant={'contained'}
        onClick={() => navigate({ to: '/dashboard' })}
      >
        to dash
      </Button>
    </>
  )
}
