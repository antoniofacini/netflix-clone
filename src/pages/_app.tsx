import { AppProps } from 'next/app'
import Head from 'next/head'
import CurrentUserProvider from 'contexts/currentUserContext'
import GlobalStyle from 'styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CurrentUserProvider>
      <Head>
        <title>ProviFlix</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="apple-touch-icon icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="ProviFlix" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </CurrentUserProvider>
  )
}

export default MyApp
