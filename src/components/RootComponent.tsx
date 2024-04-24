import { ThemeToggler } from '@/components/themeToggler/ThemeToggler'
import { LanguageToggler } from '@/components/languageToggler/LanguageToggler'
import { Outlet } from '@tanstack/react-router'

export const RootComponent = () => {
  return (
    <div>
      <ThemeToggler />
      <LanguageToggler />
      <hr />
      <Outlet />
    </div>
  )
}
