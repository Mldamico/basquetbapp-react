import { Field, Form, Formik, withFormik } from 'formik'
import React from 'react'
import tw from 'twin.macro'
import { registerPlayer } from '../../../features/player/playerAction';
import { CustomInput } from '../../../hooks/CustomInput';
import { useAppDispatch } from '../../../hooks/useDispatch';
const AuthContainer = tw.section`mx-auto max-w-3xl text-center mt-12`

interface FormValues {
  fullName: string;
  email: string;
  password: string;
}

export default function Signup() {
  const dispatch = useAppDispatch()
  const initialValues: FormValues = { fullName: '', email: '', password: '' }
  return (
    <AuthContainer>
      <div className='flex flex-col border-2 bg-cardinal rounded-lg border-sienna text-seashell p-6'>
        <h2 className='text-3xl'>Sign In</h2>
        <div className='mt-6'>
          <Formik initialValues={initialValues} onSubmit={(values, actions) => {
            console.log({ values, actions })
            dispatch(registerPlayer({ email: values.email, fullName: values.fullName, password: values.fullName }))
            actions.setSubmitting(false);
          }}>
            <Form className='flex flex-col max-w-md mx-auto'>
              <CustomInput
                label='Full Name'
                name="fullName"
                type="text"
                placeholder="Enter Username"
              />
              <CustomInput
                label='Email'
                name="email"
                type="email"
                placeholder="Enter Email"
              />
              <CustomInput
                label='Password'
                name="password"
                type="password"
                placeholder="Enter Password"
              />


              <button type='submit'>Signin</button>
            </Form>
          </Formik>

        </div>
      </div>
    </AuthContainer>
  )
}

