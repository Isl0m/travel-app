import { useCallback, useEffect, useMemo, useState } from 'react'
import { useSession } from 'next-auth/react'
import { IPlace } from '@/types/place'
import { client } from 'sanity'
import { queries } from 'queries'

export const useFavorites = (placeId: string) => {
	const { data } = useSession()
	const [favorites, setFavorites] = useState<IPlace[]>([])
	const [currentFavoriteId, setCurrentFavoriteId] = useState<string>('')
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		if (data?.user?.email)
			client
				.fetch<{ places: IPlace[]; _id: string }>(
					queries.getFavorites(data?.user?.email)
				)
				.then(data => {
					setFavorites(data.places)
					setCurrentFavoriteId(data._id)
				})
	}, [data])

	const checkFavorite = useCallback(
		(_id: string) => favorites?.some(fav => fav._id === _id),
		[favorites]
	)
	const addToFavorites = useCallback(async () => {
		await client
			.patch(currentFavoriteId)
			.setIfMissing({ places: [] })
			.append('places', [
				{
					_ref: placeId,
					_type: 'reference'
				}
			])
			.commit()
			.finally(() => setIsLoading(false))
			.catch(e => console.error(e))
	}, [currentFavoriteId, placeId])

	const removeFromFavorites = useCallback(async () => {
		await client.delete(currentFavoriteId).finally(() => setIsLoading(false))
	}, [currentFavoriteId])

	const toggleFavorite = useCallback(async () => {
		setIsLoading(true)
		if (checkFavorite(placeId)) await removeFromFavorites()
		else await addToFavorites()
	}, [currentFavoriteId, placeId])
	return useMemo(
		() => ({
			favorites,
			checkFavorite,
			toggleFavorite,
			isLoading
		}),
		[favorites, checkFavorite, toggleFavorite, isLoading]
	)
}