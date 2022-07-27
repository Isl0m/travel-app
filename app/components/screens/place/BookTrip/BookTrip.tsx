import { FC } from 'react'
import { AiFillCaretRight } from 'react-icons/ai'

import s from './BookTrip.module.scss'

const BookTrip: FC = () => {
	const bookTrip = () => {
		console.log('Ok')
	}

	return (
		<button className={s.button} onClick={bookTrip}>
			<span className={s.text}>Book a trip</span>
			<span className={s.icon}>
				<AiFillCaretRight size="18" />
			</span>
		</button>
	)
}

export default BookTrip
