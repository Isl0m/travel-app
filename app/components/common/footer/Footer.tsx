import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'
import s from './Footer.module.scss'
import Link from 'next/link'

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
		icon: 'favorite_outline',
		link: '/favorites'
	},
	{
		icon: 'account_circle',
		link: '/profile'
	}
]

const Footer = () => {
	const { push, pathname } = useRouter()
	const { data, status } = useSession()
	if (status === 'loading') 'Loading ...'
	if (pathname === '/auth') return null
	return (
		<footer className={s.footer}>
			<nav>
				{data ? (
					navItems.map(({ icon, link }) => (
						<button
							className={pathname === link ? s.active : ''}
							onClick={() => push(link)}
							key={icon}
						>
							<span className="material-icons-outlined">{icon}</span>
						</button>
					))
				) : (
					<Link href="/auth">
						<a className={s['go-to-login']}>Go to Login</a>
					</Link>
				)}
			</nav>
		</footer>
	)
}

export default Footer
