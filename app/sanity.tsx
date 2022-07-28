import {
	createClient,
	createPreviewSubscriptionHook,
	ProjectConfig
} from 'next-sanity'
import { PortableText as PortableTextComponent } from '@portabletext/react'
import createImageUrlBuilder from '@sanity/image-url'

interface IConfig extends ProjectConfig {
	useCdn: boolean
}

export const config: IConfig = {
	projectId: 'tifg38si',
	dataset: 'production',
	token: process.env.SANITY_API_TOKEN,
	useCdn: false
}

export const client = createClient(config)

export const usePreviewSubscription = createPreviewSubscriptionHook(config)
export const urlFor = source => createImageUrlBuilder(config).image(source)
export const PortableText = props => (
	<PortableTextComponent components={{}} {...props} />
)
