import { createFileRoute } from '@tanstack/react-router'
import { LoginComponent } from '@/components/auth/LoginComponent'
import { z } from 'zod'

export const Route = createFileRoute('/login')({
  validateSearch: z.object({
    redirect: z.string().optional()
  })
}).update({
  component: LoginComponent
})
