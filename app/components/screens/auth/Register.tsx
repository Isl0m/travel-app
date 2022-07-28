import { useRouter } from 'next/router'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signUp } from 'next-auth-sanity/client'
import { signIn } from 'next-auth/react'

import { IAuthFields, IAuthProps } from './auth.interface'
import { emailRegex, passwordRegex } from '../../../constants'
import s from './Auth.module.scss'

const Register: FC<IAuthProps> = ({ toggleAuthType }) => {
	const {
		handleSubmit,
		register,
		setError,
		formState: { errors }
	} = useForm<IAuthFields>({ mode: 'onChange' })

	const { push } = useRouter()

	const onSubmit: SubmitHandler<IAuthFields> = async data => {
		const res = await signUp(data)
		if (res?.error) {
			setError('email', {
				type: 'custom',
				//@ts-ignore
				message: res?.error
			})
		} else {
			signIn('sanity-login', {
				redirect: false,
				...data
			})
			push('/')
		}
	}
	return (
		<div className={s.wrapper}>
			<h1>Auth/Register</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('name', {
						required: 'Name is required'
					})}
					type="text"
					placeholder="Name"
				/>
				{errors.name && <div className={s.error}>{errors.name.message}</div>}
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
				/>
				{errors.email && <div className={s.error}>{errors.email.message}</div>}
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
					autoComplete="on"
					placeholder="Password"
				/>
				{errors.password && (
					<div className={s.error}>{errors.password.message}</div>
				)}
				<button type="submit" className={s.button}>
					Register
				</button>

				<div className={s.changeType}>
					I want
					<button onClick={toggleAuthType}>Login</button>
				</div>
			</form>
		</div>
	)
}

export default Register
