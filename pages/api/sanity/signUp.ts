import { signUpHandler } from 'next-auth-sanity'
import { sanityClientServer } from 'sannity.server'

export default signUpHandler(sanityClientServer)
