import { ChangeEvent, FC, useState } from 'react'
import { MdSearch } from 'react-icons/md'
import { BsFilter } from 'react-icons/bs'
import { IPlace } from '@/types/place'
import { TypeSetState } from '@/types/common'
import s from './Search.module.scss'

interface ISearch {
	setPlaces: TypeSetState<IPlace[]>
	initialPlaces: IPlace[]
	setIsLoading: TypeSetState<boolean>
	handleFilter: () => void
}

const Search: FC<ISearch> = ({ setPlaces, initialPlaces, setIsLoading,handleFilter }) => {
	const [searchTerm, setSearchTerm] = useState('')
	const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setIsLoading(true)
		const value = e.target.value
		setSearchTerm(value)
		if (value) {
			setPlaces(
				initialPlaces.filter(
					place =>
						place.location.city.toLowerCase().trim().includes(value.toLowerCase().trim()) ||
						place.location.country.toLowerCase().includes(value.toLowerCase().trim())
				)
			)
			setIsLoading(false)
		} else {
			setPlaces(initialPlaces)
			setIsLoading(false)
		}
	}
	return (
		<div className={s.wrapper}>
			<div className={s.search}>
				<span>
					<MdSearch size={25} />
				</span>
				<input
					type="text"
					onChange={searchHandler}
					value={searchTerm}
					placeholder="Search place..."
				/>
			</div>
			<button className={s.filter} onClick={handleFilter} > <BsFilter size={25} /> </button>
		</div>
	)
}

export default Search
