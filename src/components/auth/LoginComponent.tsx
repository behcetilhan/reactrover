import { useFormik } from 'formik'
import { loginSchema } from '@/components/auth/loginSchema'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { Button, Container, Stack, TextField } from '@mui/material'

export const LoginComponent = () => {
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
            label='Username'
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
            label='Password'
            type='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && !!errors.password}
            helperText={touched.password && errors.password}
          />
          <Button type={'submit'} color={'primary'} variant={'contained'}>
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  )
}
