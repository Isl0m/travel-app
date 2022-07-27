import { FC } from 'react'
import s from './HeadingSection.module.scss'

import mapImg from '@/images/map.png'

const HeadingSection: FC = () => {
	return (
		<section
			className={s.section}
			style={{ backgroundImage: `url('${mapImg.src}')` }}
		>
			<h1>best places for trip</h1>
		</section>
	)
}

export default HeadingSection
