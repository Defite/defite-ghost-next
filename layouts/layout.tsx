import { useEffect } from 'react'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import Prism from 'prismjs'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  useEffect(() => {
    Prism.highlightAll()
  })

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
