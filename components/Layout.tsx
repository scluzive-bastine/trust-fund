import Head from 'next/head'
import Header from './layouts/Header'
const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Trust Fund</title>
      </Head>
      <main className='relative'>
        <Header />
        {children}
      </main>
    </>
  )
}

export default Layout
