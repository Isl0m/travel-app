import { GetStaticProps } from 'next'

import { queries } from 'queries'
import { client } from 'sanity'
import { NextPageAuth } from '@/types/auth'
import Favorites from '@/components/screens/favorites/Favorites'
import { IPlace } from '@/types/place'

const FavoritesPage: NextPageAuth<{ places: IPlace[] }> = ({ places }) => {
	return <Favorites places={places} />
}

FavoritesPage.isOnlyUser = true

export const getStaticProps: GetStaticProps = async () => {
	const result = await client.fetch(queries.getPlaces)

	return {
		props: {
			places: result
		}
	}
}

export default FavoritesPage
