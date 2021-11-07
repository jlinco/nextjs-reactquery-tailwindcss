import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import AppState from '@/context/App/AppState'

function MyApp({ Component, pageProps }: AppProps) {
  const { session } = pageProps

  return (
    <Provider session={session}>
      <AppState>
        <Component {...pageProps} />
      </AppState>
    </Provider>
  )
}

export default MyApp