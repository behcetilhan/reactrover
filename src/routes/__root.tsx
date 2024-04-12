import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { AppContextProps } from '@/utils/AppContext'
import { ThemeToggler } from '@/components/themeToggler/ThemeToggler'
import { LanguageToggler } from '@/components/languageToggler/LanguageToggler'

export interface RouterContextProps {
  auth: AppContextProps
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContextProps>()({
  component: () => (
    <div>
      <ThemeToggler />
      <LanguageToggler />
      <hr />
      <Outlet />
    </div>
  )
})
