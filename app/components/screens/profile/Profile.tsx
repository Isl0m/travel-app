import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'
import { MdEdit, MdExitToApp } from 'react-icons/md'
import Avatar from 'boring-avatars'

import s from './Profile.module.scss'
import Layout from '@/components/common/Layout'
import Meta from 'utils/Meta'
import Modal from './Modal'

const Profile: FC = () => {
	const { data } = useSession()
	const { replace } = useRouter()
	const [isModal, setIsModal] = useState<boolean>(false)

	if (data?.user?.name) {
		const {
			user: { email, name }
		} = data
		const textToAvatar = `${name} ${email}`

		const handleEdit = () => {
			setIsModal(true)
		}

		const handleLogOut = () => {
			signOut({ redirect: false })
		}

		const handleRename = () => {
			setIsModal(false)
		}

		return (
			<Layout>
				<Meta
					title="Your profile"
					description="Your profile to customization"
				/>
				<div className={s.wrapper}>
					<Avatar size={160} name={textToAvatar} />
					<h1>{name}</h1>
					<div className={s.buttons}>
						<button onClick={handleEdit}>
							Edit <MdEdit size={18} />
						</button>
						<button onClick={handleLogOut}>
							Log Out <MdExitToApp size={18} />
						</button>
					</div>
				</div>
				{isModal && <Modal handleRename={handleRename} />}
			</Layout>
		)
	} else {
		replace('/')
		return null
	}
}

export default Profile
