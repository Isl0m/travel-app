import { FC } from 'react'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'
import { MdEdit, MdExitToApp } from 'react-icons/md'
import Avatar from 'boring-avatars'

import s from './Profile.module.scss'
import Layout from '@/components/common/Layout'
import Meta from 'utils/Meta'

const Profile: FC = () => {
	const { data } = useSession()
	const { replace } = useRouter()
	if (data?.user?.name) {
		const {
			user: { email, name }
		} = data
		const textToAvatar = `${name} ${email}`

		const handleLogOut = () => {
			signOut({ redirect: false })
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
						<button>
							Edit <MdEdit size={18} />
						</button>
						<button onClick={handleLogOut}>
							Log Out <MdExitToApp size={18} />
						</button>
					</div>
				</div>
			</Layout>
		)
	} else {
		replace('/')
		return null
	}
}

export default Profile
