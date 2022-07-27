import { createClient, createPreviewSubscriptionHook } from 'next-sanity'
import { PortableText as PortableTextComponent } from '@portabletext/react'
import createImageUrlBuilder from '@sanity/image-url'

const config = {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: 'production',
	token: process.env.SANITY_API_TOKEN ,
	apiVersion: '2021-10-21',
	useCdn: false
}

export const client = createClient(config)

export const usePreviewSubscription = createPreviewSubscriptionHook(config)
export const urlFor = source => createImageUrlBuilder(config).image(source)
export const PortableText = props => (
	<PortableTextComponent components={{}} {...props} />
)
