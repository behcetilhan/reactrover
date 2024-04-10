import { createContext, PropsWithChildren, useEffect, useState } from 'react'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider, useMediaQuery } from '@mui/material'

interface ThemeContextProps {
  toggleTheme: () => void
  isDarkMode: boolean
}

const themeInitials: ThemeContextProps = {
  toggleTheme: () => {},
  isDarkMode: false
}

export const ThemeContext = createContext<ThemeContextProps>(themeInitials)

export const MultiThemeProvider = (props: PropsWithChildren) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const persistedPreference = localStorage.getItem('theme')

    if (persistedPreference) {
      return persistedPreference === 'dark'
    }

    return prefersDarkMode
  })

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#556cd6'
      },
      secondary: {
        main: '#19857b'
      },
      error: {
        main: '#ff0000'
      }
    }
  })

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
