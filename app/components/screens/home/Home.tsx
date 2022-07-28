import { FC, useState } from 'react'

import Meta from 'utils/Meta'
import { IPlace } from '@/types/place'
import Layout from '@/common/Layout'
import HeadingSection from '@/elements/Home/HeadingSection/HeadingSection'
import PlacesCard from '@/components/elements/Home/PlacesCard/PlacesCard'

import s from './Home.module.scss'

interface IHome {
	initialPlaces: IPlace[]
}

const Home: FC<IHome> = ({ initialPlaces }) => {
	const [places, setPlaces] = useState(initialPlaces)
	return (
		<Layout>
			<Meta
				title="Book your future trip"
				description="Best routes for traveling"
			/>
			<HeadingSection />
			<div className={s.wrapper}>
				<PlacesCard places={places} />
			</div>
		</Layout>
	)
}

export default Home
