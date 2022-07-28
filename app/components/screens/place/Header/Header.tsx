import { FC } from 'react'
import { useSession } from 'next-auth/react'
import BackButton from './BackButton'
import Favorites from './Favorites'
import s from './Header.module.scss'

const Header: FC<{ _id: string }> = ({ _id }) => {
	const { data } = useSession()
	return (
		<div className={s.wrapper}>
			<BackButton />
			{data && <Favorites _id={_id} />}
		</div>
	)
}

export default Header
