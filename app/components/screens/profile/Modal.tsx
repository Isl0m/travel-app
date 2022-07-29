import { FC } from 'react'
import { client } from 'sanity'
import { useSession } from 'next-auth/react'

import s from './Profile.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'

interface INewName {
	name: string
}

const Modal: FC<{ handleRename: () => void }> = ({ handleRename }) => {
	const { data } = useSession()
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<INewName>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<INewName> = ({ name }) => {
		const req =
			data?.user?.email &&
			client
				.patch('user.68e7dbbd-3b23-45db-9f26-02bb83db4936')
				.set({
					name
				})
				.commit()
		console.log(req)
		handleRename()
	}

	return (
		<div className={s.modal}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('name', {
						required: 'Name is required'
					})}
					type="text"
					placeholder="Name"
				/>
				{errors.name && <div className={s.error}>{errors.name.message}</div>}
				<button type="submit">Change</button>
			</form>
		</div>
	)
}

export default Modal
