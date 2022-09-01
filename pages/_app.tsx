import './global.css'
import './cards.min.css'
import 'windi.css'
import 'prismjs/themes/prism-okaidia.css'
import type { AppProps } from 'next/app'
import Layout from '../layouts/layout'
import React from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const handleStart = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  React.useEffect(() => {
    router.events.on('routeChangeStart', handleStart)

    return () => {
      router.events.off('routeChangeStart', handleStart)
    }
  }, [router])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
