import { GetStaticProps, NextPage } from 'next'
import { IPlace } from '@/types/place'
import { client } from 'sanity'
import { queries } from 'queries'
import Home from '@/screens/home/Home'

interface IHomePage {
	initialPlaces: IPlace[]
}

const HomePage: NextPage<IHomePage> = ({ initialPlaces }) => {
	return <Home initialPlaces={initialPlaces} />
}

export const getStaticProps: GetStaticProps = async () => {
	const result = await client.fetch(queries.getPlacesByRaiting)

	return {
		props: {
			initialPlaces: result
		}
	}
}

export default HomePage
