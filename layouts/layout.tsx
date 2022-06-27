import Head from 'next/head'
import Footer from '../components/Footer/Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Nikita Codes</title>
        <meta
          name="description"
          content="Place where Nikita Makhov writes about front-end web development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <Footer />
    </>
  )
}

export default Layout
