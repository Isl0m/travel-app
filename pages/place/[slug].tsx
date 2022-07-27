import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Place from '@/components/screens/place/Place'
import { IPlace } from '../../app/types/place'
import { client } from 'sanity'
import { queries } from 'queries'

interface IPlacePage {
	place: IPlace
}

const PlacePage: NextPage<IPlacePage> = ({ place }) => {
	return <Place place={place} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await client.fetch(`${queries.getPlaces}{slug}`)
	const paths = res.map(place => ({
		params: { slug: place.slug.current }
	}))
	return {
		paths,
		fallback: 'blocking'
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const place = await client.fetch(queries.getPlace(String(params.slug)))
	return {
		props: {
			place
		}
	}
}

export default PlacePage
