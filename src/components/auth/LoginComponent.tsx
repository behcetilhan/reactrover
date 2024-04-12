import { useFormik } from 'formik'
import { loginSchema } from '@/components/auth/loginSchema'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { Button, Container, Stack, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const LoginComponent = () => {
  const { t } = useTranslation()
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        username: '',
        password: ''
      },
      validationSchema: toFormikValidationSchema(loginSchema),
      onSubmit: (values) => {
        console.log(JSON.stringify(values, null, 2))
      }
    })

  return (
    <Container maxWidth='xs'>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            size={'small'}
            fullWidth
            id='username'
            name='username'
            label={t('auth.username')}
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && !!errors.username}
            helperText={touched.username && errors.username}
          />
          <TextField
            size={'small'}
            fullWidth
            id='password'
            name='password'
            label={t('auth.password')}
            type='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && !!errors.password}
            helperText={touched.password && errors.password}
          />
          <Button type={'submit'} color={'primary'} variant={'contained'}>
            {t('auth.login')}
          </Button>
        </Stack>
      </form>
    </Container>
  )
}
