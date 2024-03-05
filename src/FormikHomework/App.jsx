import React, { useState } from 'react'
import './App.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string } from 'yup'
import { nanoid } from 'nanoid'

const initialValues = {
	email: '',
	password: '',
	submit: 'Войти',
	regist: 'Регистрация'
}

const validationSchema = object({
	email: string().required(),
	password: string().matches(".*\\d+.*", 'password must include a number').required()
})

export default function App() {
	const [users, setUsers] = useState([]);
	const handleSubmit = (values, { resetForm }) => {
		const user = {
			...values,
			id: nanoid(5)
		}
		setUsers([...users, user])
		resetForm()
	}

	return (
		<div className='App'>
		<div className='formik'>
			<h1>Вход</h1>
			<Formik
				onSubmit={handleSubmit}
				initialValues={initialValues}
				validationSchema={validationSchema}
				validateOnBlur={true}
				validateOnChange={false}
			>
				<Form>
					<Field type='text' name='email' placeholder='Имя пользователья или Email' />
					<ErrorMessage name='email' component='span' className='error' />
					<Field type='password' name='password' placeholder='Пароль' />
					<ErrorMessage name='password' component='span' className='error' />
					<p>Забыли пароль?</p>
					<div className="enter">
						<Field type='submit' name='submit' />
						<Field type='reset' name='regist' />
					</div>
				</Form>
			</Formik>
					</div>
			<table>
				<caption>Наши пользователи</caption>
				<thead>
					<tr>
						<th>Имя/email</th>
						<th>Пароль</th>
					</tr>
				</thead>
				<tbody>
					{
						users.map((elm)=>{
							return (
							<tr key={elm.id}>
								<td>{elm.email}</td>
								<td>{elm.password}</td>
							</tr>
							)
						})
					}
				</tbody>
			</table>
		</div>
	)
}