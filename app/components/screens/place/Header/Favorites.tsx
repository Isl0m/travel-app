import React, { FC } from 'react'
import { TbHeartMinus, TbHeartPlus } from 'react-icons/tb'

import { useFavorites } from '@/screens/favorites/useFavorites'
import s from './Header.module.scss'

const Favorites: FC<{ _id: string }> = ({ _id }) => {
	const { checkFavorite, toggleFavorite, isLoading } = useFavorites(_id)

	return (
		<div className={s.bookmark}>
			<button onClick={toggleFavorite} disabled={isLoading}>
				<span className={s.buttonWrapper}>
					{checkFavorite(_id) ? <TbHeartMinus /> : <TbHeartPlus />}
				</span>
			</button>
		</div>
	)
}

export default Favorites
