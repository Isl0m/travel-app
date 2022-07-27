import { FC, ReactNode } from 'react'
import Footer from './footer/Footer'

interface ILayout {
	isMaxWidth?: boolean
	children: ReactNode
}

const Layout: FC<ILayout> = ({ isMaxWidth = true, children }) => {
	return (
		<>
			<div
				style={{ maxWidth: isMaxWidth ? 480 : 'none', margin: '0 auto 100px' }}
			>
				{children}
			</div>

			<Footer />
		</>
	)
}

export default Layout
