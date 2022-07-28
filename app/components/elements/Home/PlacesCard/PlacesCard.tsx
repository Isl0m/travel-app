import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { IPlace } from '@/types/place'
import s from './PlacesCard.module.scss'
import PlacesItem from './PlacesItem'

interface IPlacesCard {
	places: IPlace[]
	isLoading?: boolean
	title?: string
}

const PlacesCard: FC<IPlacesCard> = ({
	places,
	isLoading = false,
	title = 'Popular places'
}) => {
	return (
		<div className={s.wrapper}>
			<h2>{title}</h2>
			{isLoading ? (
				<div
					style={{
						marginTop: '-2rem'
					}}
				>
					<Skeleton
						count={1}
						height={200}
						borderRadius="20px"
						baseColor="#1b1b1d"
						highlightColor="#2c2c2e"
					/>
				</div>
			) : places.length ? (
				places.map(place => (
					<PlacesItem key={place._id} place={place}></PlacesItem>
				))
			) : (
				<div
					style={{
						marginTop: '-2rem',
						color: '#e8e8e8',
						opacity: '.6',
						fontStyle: 'italic'
					}}
				>
					Not found!
				</div>
			)}
		</div>
	)
}

export default PlacesCard
