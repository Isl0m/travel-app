import {
	ClientConfig,
	createClient,
	createPreviewSubscriptionHook
} from 'next-sanity'
import { PortableText as PortableTextComponent } from '@portabletext/react'
import createImageUrlBuilder from '@sanity/image-url'

export const config: ClientConfig = {
	projectId: 'tifg38si',
	dataset: 'production',
	token: process.env.SANITY_API_TOKEN,
	apiVersion: '2021-10-21',
	useCdn: false
}

export const client = createClient(config)

//@ts-ignore
export const usePreviewSubscription = createPreviewSubscriptionHook(config)
//@ts-ignore
export const urlFor = source => createImageUrlBuilder(config).image(source)
//@ts-ignore
export const PortableText = props => (
	<PortableTextComponent components={{}} {...props} />
)
