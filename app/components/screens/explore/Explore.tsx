import { FC, useState } from 'react'

import Meta from 'utils/Meta'
import { IPlace } from '@/types/place'
import Layout from '@/common/Layout'
import Filters from '@/elements/Filters/Filters'
import HeadingSection from '@/elements/Home/HeadingSection/HeadingSection'
import PlacesCard from '@/components/elements/Home/PlacesCard/PlacesCard'
import Search from '@/elements/Search/Search'

import s from './Explore.module.scss'

interface IExplore {
	initialPlaces: IPlace[]
}

const Explore: FC<IExplore> = ({ initialPlaces }) => {
	const [places, setPlaces] = useState(initialPlaces)
	const [isLoading, setIsLoading] = useState(false)
	const [isFilter, setIsFilter] = useState(false)
	const handleFilter = () => {
		setIsFilter(!isFilter)
	}
	return (
		<Layout>
			<Meta
				title="Book your future trip"
				description="Best routes for traveling"
			/>
			<HeadingSection />
			<div className={s.wrapper}>
				<Search
					setPlaces={setPlaces}
					initialPlaces={initialPlaces}
					setIsLoading={setIsLoading}
					handleFilter={handleFilter}
				/>
				{isFilter && (
					<Filters setPlaces={setPlaces} initialPlaces={initialPlaces} />
				)}
				<PlacesCard
					places={places}
					isLoading={isLoading}
					title="All places for you"
				/>
			</div>
		</Layout>
	)
}

export default Explore
