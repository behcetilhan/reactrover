import { createFileRoute, redirect } from '@tanstack/react-router'
import { DashboardComponent } from '@/components/dashboard/DashboardComponent'

export const Route = createFileRoute('/')({
  beforeLoad: ({ context }) => {
    if (context.auth.user) {
      throw redirect({
        to: '/login'
      })
    }

    throw redirect({
      to: '/dashboard'
    })
  },
  component: DashboardComponent
})
