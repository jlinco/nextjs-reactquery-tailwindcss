import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import { ChakraProvider } from '@chakra-ui/react'
import AppState from '@/context/App/AppState'
import React from 'react'
import AppLoader from '@/components/General/AppLoader'

function MyApp({ Component, pageProps }: AppProps) {
  const { session } = pageProps

  return (
    <Provider session={session}>
      <AppState>
        <ChakraProvider>
          <AppLoader />
          <Component {...pageProps} />
        </ChakraProvider>
      </AppState>
    </Provider>
  )
}

export default MyApp