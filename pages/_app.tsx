import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { TrustFundProvider } from '../context/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TrustFundProvider>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </TrustFundProvider>
  )
}

export default MyApp
