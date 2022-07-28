import Layout from '@/components/common/Layout'
import PlacesCard from '@/components/elements/Home/PlacesCard/PlacesCard'
import { IPlace } from '@/types/place'
import { FC } from 'react'
import Meta from 'utils/Meta'
import s from './Favorites.module.scss'

const Favorites: FC<{ places: IPlace[] }> = ({ places }) => {
	return (
		<Layout>
			<Meta title="My favorites" />
			<div className={s.wrapper}>
				<h1>Favorites</h1>
				<PlacesCard places={places} title={''} />
			</div>
		</Layout>
	)
}

export default Favorites
