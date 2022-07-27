import NextAuth, { NextAuthOptions } from 'next-auth'
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity'
import { client } from 'sanity'

const options: NextAuthOptions = {
	providers: [SanityCredentials(client)],
	session: {
		strategy: 'jwt'
	},
	secret: 'any-secret-word',
	adapter: SanityAdapter(client)
}

export default NextAuth(options)
