import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import Head from 'next/head';

import { localStorageMethods } from '../classes/localStorageMethods';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Menú Almatierra</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',

        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
