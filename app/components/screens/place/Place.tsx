import { FC } from 'react'
import { IPlace } from '@/types/place'
import BookTrip from './BookTrip/BookTrip'
import Header from './Header/Header'
import Information from './Information/Information'
import s from './Place.module.scss'
import Wrapper from './Wrapper/Wrapper'
import Meta from 'utils/Meta'
import { urlFor } from 'sanity'

export interface IPlacePage {
	place: IPlace
}

const Place: FC<IPlacePage> = ({ place }) => {
	return (
		<>
			<Meta
				title={`${place.location.city} - ${place.location.country}`}
				description={`Best routes for traveling - ${place.location.city}`}
			image={urlFor(place.imagePath).url()}
			/>
		<Wrapper imagePath={urlFor(place.imagePath).url()}>
			<Header />
			<Information place={place} />
			<BookTrip />
		</Wrapper>
		</>
	)
}

export default Place
