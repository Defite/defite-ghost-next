import PostHeader from '../components/PostHeader /PostHeader'
import PostLayout from '../layouts/post'
import Head from 'next/dist/shared/lib/head'

const AboutPage: React.FunctionComponent = () => {
  return (
    <div className="mb-10">
      <Head>
        <title>About – Nikita Codes</title>
        <meta name="description" content="Page about me and my blog" />
      </Head>
      <PostHeader
        title="About me"
        description="A few words about me and this web page"
        theme="background"
        align="center"
      />
      <PostLayout className="prose md:prose-lg mx-auto <md:px-5">
        Hey again! You probably already know who I am?
      </PostLayout>
    </div>
  )
}

export default AboutPage
