import Head from 'next/head'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Trust Fund</title>
      </Head>
      <Header />
      <main className='relative'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
