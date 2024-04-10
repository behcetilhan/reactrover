import { useThemeContext } from '@/utils/hooks/useThemeContext'
import { IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

export const ThemeToggler = () => {
  const { toggleTheme, isDarkMode } = useThemeContext()

  return (
    <IconButton onClick={toggleTheme} color={'inherit'}>
      {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )
}
