import { FC, useState, MouseEvent } from 'react'

import Layout from '@/components/common/Layout'
import Login from './Login'
import Register from './Register'

const Auth: FC = () => {
	const [isLogin, setIsLogin] = useState<boolean>(true)
	const toggleAuthType = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setIsLogin(!isLogin)
	}
	return (
		<Layout>
			{isLogin ? (
				<Login toggleAuthType={toggleAuthType} />
			) : (
				<Register toggleAuthType={toggleAuthType} />
			)}
		</Layout>
	)
}

export default Auth
