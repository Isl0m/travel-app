import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ToastContainer } from 'react-toastify'
import NextProgressBar from 'nextjs-progressbar'

import 'react-toastify/dist/ReactToastify.css'
import '@/styles/globals.scss'
import AuthProvider from 'providers/AuthProvider/AuthProvider'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<>
			<NextProgressBar
				color="#eb601e"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<SessionProvider session={session}>
				<AuthProvider Component={Component}>
					<Component {...pageProps} />
					<ToastContainer theme="dark" draggable={false} />
				</AuthProvider>
			</SessionProvider>
		</>
	)
}

export default MyApp
