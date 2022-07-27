import { MouseEvent, FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signUp } from 'next-auth-sanity/client'
import { signIn } from 'next-auth/react'
import { toast } from 'react-toastify'

import Layout from '@/components/common/Layout'
import s from './Auth.module.scss'
import { IAuthFields } from './auth.interface'
import { emailRegex, passwordRegex } from '../../../constants'

const Auth: FC = () => {
	const [typeForm, setTypeForm] = useState<'Login' | 'Register'>('Login')

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<IAuthFields>({ mode: 'onChange' })

	const reverseTypeForm = typeForm === 'Register' ? 'Login' : 'Register'

	const onSubmit: SubmitHandler<IAuthFields> = async data => {
		if (typeForm === 'Register') {
			const response = await signUp(data)
			//@ts-ignore
			if (response.error) toast.error(response.error)
		} else {
			const response = await signIn('sanity-login', {
				redirect: false,
				...data
			})
			//@ts-ignore
			if (response.error) toast.error(response.error)
		}
	}

	const handleTypeForm = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setTypeForm(reverseTypeForm)
	}

	return (
		<Layout>
			<div className={s.wrapper}>
				<h1>Auth/{typeForm}</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: emailRegex,
								message: 'Email is invalid'
							}
						})}
						type="text"
						placeholder="E-mail"
						className={s.input}
					/>
					{errors.email && (
						<div className={s.error}>{errors.email.message}</div>
					)}
					<input
						{...register('password', {
							required: 'Password is required',
							pattern: {
								value: passwordRegex,
								message:
									'Your password must be 6-64 characters, and include lowercase letter, uppercase letter, special character and a number.'
							}
						})}
						type="password"
						placeholder="Password"
						className={s.input}
					/>
					{errors.password && (
						<div className={s.error}>{errors.password.message}</div>
					)}
					<button type="submit" className={s.button}>
						{typeForm}
					</button>

					<div className={s.changeType}>
						I want
						<button onClick={handleTypeForm}>{reverseTypeForm}</button>
					</div>
				</form>
			</div>
		</Layout>
	)
}

export default Auth
