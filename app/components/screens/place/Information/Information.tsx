import { FC } from 'react'
import { FaCalendar, FaMapMarkerAlt, FaStar } from 'react-icons/fa'
import { PortableText } from 'sanity'

import { IPlace } from '@/types/place'
import Map from './Map'
import s from './Information.module.scss'

interface IInformation {
	place: IPlace
}

const Information: FC<IInformation> = ({ place }) => {
	const duration =
		place.duration === '1' ? place.duration + ' day' : place.duration + ' days'
	return (
		<>
			<div className={s.wrapper}>
				<div className={s.heading}>
					<FaMapMarkerAlt color="#e8e8e8" size={20} />
					<h1>{place.location.city + ', ' + place.location.country}</h1>
				</div>

				<div className={s.description}>
					{<PortableText value={place.description} />}
				</div>

				<div className={s.additional}>
					<div className={s.rating}>
						<FaStar color="#FDAE32" size={16} className={s.star} />
						<span>{place.rating}/10</span>
					</div>

					<div className={s.duration}>
						<FaCalendar color="#565658" size={16} className={s.calendar} />
						<span>{duration}</span>
					</div>
				</div>

				<Map location={place.location} />
			</div>
		</>
	)
}

export default Information
