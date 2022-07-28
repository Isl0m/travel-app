import { IPlace } from '@/types/place'
import Link from 'next/link'
import { FC } from 'react'
import { urlFor } from 'sanity'
import s from './PlacesCard.module.scss'

const PlacesItem: FC<{ place: IPlace }> = ({ place }) => {
	return (
		<Link href={`/place/${place.slug.current}`}>
			<a
				className={s.item}
				style={{
					backgroundImage: `url(${urlFor(place.imagePath).url()})`
				}}
			>
				<span className={s.heading}>
					{place.location.city + ', ' + place.location.country}
				</span>
			</a>
		</Link>
	)
}

export default PlacesItem
