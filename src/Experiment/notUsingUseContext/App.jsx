import React from 'react'
import { Formik, Form, Field } from 'formik'
// import {object, string, number, date}from 'yup'
// import moment from 'moment'
const initalValues = {
  password: ''
}
export default function App() {
  const handleSubmit = (values, dirty) => {
    console.log(values);
    console.log(dirty);
  }
  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initalValues}
        validateOnChange={false}
        
      >
        {
          (formik) => {
            console.log(formik);
            <Form>
              <Field id='password' name='password' type='password' />
              <Field type='submit' value='submit' />
            </Form>
          }
        }
      </Formik>
    </div>
  )
}