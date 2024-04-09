import { ThemeToggler } from '@/components/themeToggler/ThemeToggler'
import { LanguageToggler } from '@/components/languageToggler/LanguageToggler'
import { Outlet, useRouter } from '@tanstack/react-router'
import { Button, Stack } from '@mui/material'
import { setAuthToken, tokenGlobal } from '@/utils/apiDefaults'

export const RootComponent = () => {
  const router = useRouter()
  return (
    <div>
      <Stack
        direction='row'
        justifyContent={'flex-end'}
        spacing={2}
        sx={{ p: 1 }}
      >
        {tokenGlobal && (
          <Button
            onClick={() => {
              setAuthToken(undefined)
              router.invalidate()
            }}
          >
            reset token
          </Button>
        )}
        <ThemeToggler />
        <LanguageToggler />
      </Stack>
      <hr />
      <Outlet />
    </div>
  )
}
