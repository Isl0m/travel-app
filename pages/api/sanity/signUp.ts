import { signUpHandler } from 'next-auth-sanity'
import { client } from 'sanity'

export default signUpHandler(client)
