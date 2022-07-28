import { MouseEvent } from 'react'

export interface IAuthFields {
	name?: string
	email: string
	password: string
}
export interface IAuthProps {
	toggleAuthType: (e: MouseEvent<HTMLButtonElement>) => void
}
