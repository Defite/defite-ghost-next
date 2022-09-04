import './global.css'
import './cards.min.css'
import 'windi.css'
import 'prismjs/themes/prism-okaidia.css'
import type { AppProps } from 'next/app'
import Layout from '../layouts/layout'
import React from 'react'
import TransitionEffect from '../components/TransitionEffect'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <TransitionEffect>
        <Component {...pageProps} />
      </TransitionEffect>
    </Layout>
  )
}
export default MyApp
