import { createFileRoute } from '@tanstack/react-router'
import { LoginComponent } from '@/components/auth/LoginComponent'

export const Route = createFileRoute('/login')({
  component: () => <LoginComponent />
})
