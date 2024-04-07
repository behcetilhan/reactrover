import { Field, Form, Formik } from 'formik'
import { loginSchema } from '@/components/auth/loginSchema'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { useMutation } from '@tanstack/react-query'
import { User } from '@/utils/AuthContext'
import axios from 'axios'

export const LoginComponent = () => {
  const mutation = useMutation({
    mutationFn: ({ username, password }: User) => {
      return axios.post(
        'https://localhost:3001/login',
        { username, password },
        { withCredentials: true }
      )
    },
    onSuccess: () => {
      console.log('success')
    },
    onError: (error) => console.log('error -->', error)
  })

  return (
    <Formik
      initialValues={{
        username: '',
        password: ''
      }}
      onSubmit={(values) => {
        console.log('values -->', values)
        mutation.mutate(values)
      }}
      validationSchema={toFormikValidationSchema(loginSchema)}
    >
      <Form>
        <Field name={'username'} placeholder={'user name'} />
        <Field name={'password'} placeholder={'pass'} />
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}
