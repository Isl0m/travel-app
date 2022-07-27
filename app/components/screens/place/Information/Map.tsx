import { FC } from 'react'
import {
	ComposableMap,
	Geographies,
	Geography,
	ZoomableGroup
} from 'react-simple-maps'
import { TypeCord, TypeLocation } from '@/types/place'

import styles from './Information.module.scss'

const geoUrl =
	'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'

const regionToCord: TypeCord = {
	'north-america': [-70, 45],
	'latin-america': [-70, -18],
	africa: [40, 0],
	europe: [40, 50],
	asia: [90, 38],
	oceania: [105, -12]
}

const Map: FC<{ location: TypeLocation }> = ({ location }) => {
	const center = regionToCord[location.region]

	return (
		<div className={styles.map}>
			<ComposableMap width={240} height={140}>
				<ZoomableGroup
					zoom={location.zoom ? location.zoom : 0.6}
					center={center}
				>
					<Geographies geography="/features.json">
						{({ geographies }) =>
							geographies.map(geo => {
								const isCurrent = geo.properties.name === location.country
								return (
									<Geography
										key={geo.rsmKey}
										geography={geo}
										fill={isCurrent ? '#eb601e' : '#39373B'}
										stroke={isCurrent ? 'transparent' : '#2D2B2F'}
										style={{
											default: { outline: 'none' },
											hover: { outline: 'none' },
											pressed: { outline: 'none' }
										}}
									/>
								)
							})
						}
					</Geographies>
				</ZoomableGroup>
			</ComposableMap>
		</div>
	)
}

export default Map
