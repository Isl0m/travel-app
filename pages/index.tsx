import { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import Layout from '@/common/Layout';
import HeadingSection from '@/elements/Home/HeadingSection/HeadingSection';
import Search from '@/elements/Search/Search';
import Filters from '@/elements/Filters/Filters';
import { IPlace } from '@/types/place';
import PopularPlaces from '@/elements/Home/PopularPlaces/PopularPlaces';
import Meta from 'utils/Meta';
import { client } from 'sanity';
import { queries } from 'queries';


interface IHome {
	initialPlaces: IPlace[];
}

const Home: NextPage<IHome> = ({ initialPlaces }) => {
	const [places, setPlaces] = useState(initialPlaces)
	const [isLoading, setIsLoading] = useState(false)
	const [isFilter,setIsFilter] = useState(false)
	const handleFilter = () =>{
		setIsFilter(!isFilter)
	}
	return (
		<Layout>
			<Meta
				title="Book your future trip"
				description="Best routes for traveling"
			/>
			<HeadingSection />
			<div style={{ width: '80%', margin: '0 auto 0' }}>
				<Search
					setPlaces={setPlaces}
					initialPlaces={initialPlaces}
					setIsLoading={setIsLoading}
				  handleFilter={handleFilter}
				/>
				{isFilter &&
				<Filters setPlaces={setPlaces} initialPlaces={initialPlaces} />
				}
				<PopularPlaces places={places} isLoading={isLoading} />
			</div>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const result = await client.fetch(queries.getPlaces)

	return {
		props: {
			initialPlaces:result
		}
	}
}

export default Home
