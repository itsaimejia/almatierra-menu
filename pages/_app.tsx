import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import Head from 'next/head';
import { getMenus } from './api/menus';
import { localStorageMethods } from '../classes/localStorageMethods';

const getDataMenus = async () => {
  let localMenus = localStorageMethods.getItem('menus')
  if (localMenus === undefined) {
    const menus = await getMenus()
    localStorageMethods.setItem('menus', menus)
  } else {
    const menus = await getMenus()
    if (menus === localMenus) {
      localStorageMethods.setItem('menus', localMenus)
    } else {
      localStorageMethods.setItem('menus', menus)
    }
  }
  localStorageMethods.setItem('menus', localMenus)

}

export default function App({ Component, pageProps }: AppProps) {
  getDataMenus()
  return (
    <>
      <Head>
        <title>Menu Almatierra</title>
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
