import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { initialValues, validationSchema } from '../../constant/constant.js';
import './FormikComponent.scss';

function FormikComponent({ handleSubmit }) {
    return (
        <div className='Formik'>
            <div className='Formik__Content'>
                <h1>Вход</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Field type='email' name='email' placeholder='Имя пользователя или Email' className='Formik__Field'/>
                    <ErrorMessage name='email' component='p' />
                    <Field type='password' name='password' placeholder='Пароль' className='Formik__Field'  />
                    <ErrorMessage name='password' component='p' />
                    <Field type='submit' value='Войти' className='Formik__Field' />
                </Form>
            </Formik>
            </div>
        </div>
    );
}

export default FormikComponent