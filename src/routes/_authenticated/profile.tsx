import { createFileRoute } from '@tanstack/react-router'
import { ProfileComponent } from '@/components/profile/ProfileComponent'

export const Route = createFileRoute('/_authenticated/profile')({
  component: () => <ProfileComponent />
})
