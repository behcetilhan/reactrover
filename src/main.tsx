import ReactDOM from 'react-dom/client'
import { AppProvider } from '@/utils/AppContext'
import { StrictMode } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '@/theme'
import { App } from '@/App'

const rootElement = document.getElementById('appRoot')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)

  root.render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppProvider>
          <App />
        </AppProvider>
      </ThemeProvider>
    </StrictMode>
  )
}
