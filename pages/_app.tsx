import './global.css'
import './cards.min.css'
import 'windi.css'
import 'prismjs/themes/prism-okaidia.css'
import type { AppProps } from 'next/app'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Layout from '../layouts/layout'
import React from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const handleStart = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }

  React.useEffect(() => {
    router.events.on('routeChangeStart', handleStart)

    return () => {
      router.events.off('routeChangeStart', handleStart)
    }
  }, [router])

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <SpeedInsights />
    </>
  )
}
export default MyApp
