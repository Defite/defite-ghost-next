import PostHeader from '../components/PostHeader /PostHeader'
import PostLayout from '../layouts/post'
import Head from 'next/dist/shared/lib/head'

const AboutPage: React.FunctionComponent = () => {
  return (
    <div className="mb-10">
      <Head>
        <title>About – Nikita Codes</title>
        <meta name="description" content="Page about me and my blog" />
        <meta property="og:image" content="https://nikita.codes/share.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://nikita.codes/share.png"
        />
      </Head>
      <PostLayout className="prose md:prose-lg mx-auto <md:px-5">
        Hey again! You probably already know who I am?
      </PostLayout>
    </div>
  )
}

export default AboutPage
