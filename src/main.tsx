import ReactDOM from 'react-dom/client'
import { AppProvider } from '@/utils/AppContext'
import { StrictMode } from 'react'
import { CssBaseline } from '@mui/material'
import { App } from '@/App'
import { MultiThemeProvider } from '@/utils/ThemeContext'

const rootElement = document.getElementById('appRoot')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)

  root.render(
    <StrictMode>
      <MultiThemeProvider>
        <CssBaseline />
        <AppProvider>
          <App />
        </AppProvider>
      </MultiThemeProvider>
    </StrictMode>
  )
}
