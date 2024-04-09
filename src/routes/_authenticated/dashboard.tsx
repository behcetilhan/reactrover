import { createFileRoute } from '@tanstack/react-router'
import { DashboardComponent } from '@/components/dashboard/DashboardComponent'

export const Route = createFileRoute('/_authenticated/dashboard')({
  component: () => <DashboardComponent />
})
