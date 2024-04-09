import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { CssBaseline } from '@mui/material'
import { App } from '@/App'
import { MultiThemeProvider } from '@/utils/ThemeContext'
import { initI18n } from '@/i18n'
import { AppProvider } from '@/utils/AppProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, ErrorComponent } from '@tanstack/react-router'
import { routeTree } from '@/routeTree.gen'

const queryClient = new QueryClient()

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
    queryClient
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  defaultPendingComponent: () => <span>...loading...</span>,
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
  defaultNotFoundComponent: () => <span>is a 404</span>
})

const rootElement = document.getElementById('appRoot')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)

  initI18n()
  root.render(
    <StrictMode>
      <MultiThemeProvider>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <AppProvider>
            <ToastContainer />
            <App router={router} />
          </AppProvider>
        </QueryClientProvider>
      </MultiThemeProvider>
    </StrictMode>
  )
}
