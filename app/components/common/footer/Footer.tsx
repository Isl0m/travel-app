import { useRouter } from 'next/router'
import s from './Footer.module.scss'

type TypeNavItem = {
	icon: string
	link: string
}
const navItems: TypeNavItem[] = [
	{
		icon: 'home',
		link: '/'
	},
	{
		icon: 'explore',
		link: '/explore'
	},
	{
		icon: 'place',
		link: '/place/venezia'
	},
	{
		icon: 'person_outline',
		link: '/auth'
	}
]

const Footer = () => {
	const { push, pathname } = useRouter()

	return (
		<footer className={s.footer}>
			<nav>
				{navItems.map(({ icon, link }) => (
					<button
						className={pathname === link ? s.active : ''}
						onClick={() => push(link)}
						key={icon}
					>
						<span className="material-icons-outlined">{icon}</span>
					</button>
				))}
			</nav>
		</footer>
	)
}

export default Footer
