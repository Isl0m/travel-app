import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ToastContainer } from 'react-toastify'
import NextProgressBar from 'nextjs-progressbar'

import 'react-toastify/dist/ReactToastify.css'
import '@/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider>
			<NextProgressBar
				color="#eb601e"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Component {...pageProps} />
			<ToastContainer theme='dark' draggable={false} />
		</SessionProvider>
	)
}

export default MyApp
