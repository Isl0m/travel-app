import { FC, ReactNode } from 'react'
import s from './Wrapper.module.scss'

interface IWrapper {
	imagePath: string
	children: ReactNode
}

const Wrapper: FC<IWrapper> = ({ imagePath, children }) => {
	return (
		<div className={s.wrapper} style={{ backgroundImage: `url(${imagePath})` }}>
			<div>{children}</div>
		</div>
	)
}

export default Wrapper
