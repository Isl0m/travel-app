import { GetStaticProps, NextPage } from 'next'
import { IPlace } from '@/types/place'
import { client } from 'sanity'
import { queries } from 'queries'
import Explore from '@/screens/explore/Explore'

interface IExplorePage {
	initialPlaces: IPlace[]
}

const ExplorePage: NextPage<IExplorePage> = ({ initialPlaces }) => {
	return <Explore initialPlaces={initialPlaces} />
}

export const getStaticProps: GetStaticProps = async () => {
	const result = await client.fetch(queries.getPlaces)

	return {
		props: {
			initialPlaces: result
		}
	}
}

export default ExplorePage
