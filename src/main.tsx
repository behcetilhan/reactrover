import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { CssBaseline } from '@mui/material'
import { App } from '@/App'
import { MultiThemeProvider } from '@/utils/ThemeContext'
import { initI18n } from '@/i18n'
import { AppProvider } from '@/utils/AppProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const rootElement = document.getElementById('appRoot')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)

  initI18n()
  root.render(
    <StrictMode>
      <MultiThemeProvider>
        <CssBaseline />
        <AppProvider>
          <ToastContainer />
          <App />
        </AppProvider>
      </MultiThemeProvider>
    </StrictMode>
  )
}
