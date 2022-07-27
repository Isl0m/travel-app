import { FC } from 'react'
import BackButton from './BackButton'
import Favorites from './Favorites'
import s from './Header.module.scss'

const Header: FC = () => {
	return (
		<div className={s.wrapper}>
			<BackButton />
			<Favorites />
		</div>
	)
}

export default Header
