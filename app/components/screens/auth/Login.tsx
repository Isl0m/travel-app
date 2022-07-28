import { useRouter } from 'next/router'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'

import { IAuthFields, IAuthProps } from './auth.interface'
import s from './Auth.module.scss'

const Login: FC<IAuthProps> = ({ toggleAuthType }) => {
	const {
		handleSubmit,
		register,
		setError,
		formState: { errors }
	} = useForm<IAuthFields>({ mode: 'onChange' })

	const { push } = useRouter()

	const checkErrorType = (error: string | undefined) => {
		if (error === undefined) return null
		const str = error.toLowerCase()
		if (str.includes('email')) return 'email'
		else if (str.includes('password')) return 'password'
		return null
	}

	const onSubmit: SubmitHandler<IAuthFields> = async data => {
		const res = await signIn('sanity-login', {
			redirect: false,
			...data
		})
		if (res?.error) {
			const errorType = checkErrorType(res?.error)
			errorType &&
				setError(errorType, {
					type: 'custom',
					message: res?.error
				})
		} else push('/')
	}

	return (
		<div className={s.wrapper}>
			<h1>Auth/Login</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('email', {
						required: 'Email is required'
					})}
					type="text"
					placeholder="E-mail"
				/>
				{errors.email && <div className={s.error}>{errors.email.message}</div>}
				<input
					{...register('password', {
						required: 'Password is required'
					})}
					type="password"
					autoComplete="on"
					placeholder="Password"
				/>
				{errors.password && (
					<div className={s.error}>{errors.password.message}</div>
				)}
				<button type="submit" className={s.button}>
					Login
				</button>

				<div className={s.changeType}>
					I want
					<button onClick={toggleAuthType}>Register</button>
				</div>
			</form>
		</div>
	)
}

export default Login
