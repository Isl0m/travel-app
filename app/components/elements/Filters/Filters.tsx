import { FC, useState } from 'react'
import cn from 'classnames'
import uniqBy from 'lodash/uniqBy'

import { TypeSetState } from '@/types/common'
import { IPlace } from '@/types/place'
import s from './Filters.module.scss'

interface IFilters {
	initialPlaces: IPlace[]
	setPlaces: TypeSetState<IPlace[]>
}

const Filters: FC<IFilters> = ({ setPlaces, initialPlaces }) => {
	const [filter, setFilter] = useState('')
	const handleFilter = (location: string) => {
		if (filter === location) {
			setPlaces(initialPlaces)
			setFilter('')
		} else {
			setPlaces(
				initialPlaces.filter(
					place =>
						place.location.country.toLowerCase() === location.toLowerCase()
				)
			)
			setFilter(location)
		}
	}
	return (
		<div className={s.wrapper}>
			{uniqBy(initialPlaces, 'location.country').map(place => {
				const country = place.location.country
				return (
					<button
						onClick={() => handleFilter(country)}
						key={country}
						className={cn({
							[s.active]: country === filter
						})}
					>
						{country}
					</button>
				)
			})}
		</div>
	)
}

export default Filters
