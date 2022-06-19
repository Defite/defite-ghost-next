import Storyblok, { useStoryblok } from '../../lib/storyblok'
import PostHeader from '../../components/PostHeader /PostHeader'
import PostLayout from '../../layouts/post'
import { api } from '../../lib/ghost'
import Head from 'next/head'

const Post: React.FunctionComponent<any> = ({ story }) => {
  const metaTags = {
    title: story.title || story.meta_title,
    description: story.custom_excerpt || story.meta_description,
  }

  const defaultShareImage = 'https://nikita.codes/share.png'

  return (
    <main className="mb-10">
      <Head>
        <title>{metaTags.title} – Nikita Codes</title>
        <meta name="description" content={metaTags.description} />

        <meta
          property="og:image"
          content={story.og_image || defaultShareImage}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content={story.twitter_image || defaultShareImage}
        />
      </Head>
      <PostHeader
        title={story.title}
        description={story.custom_excerpt}
        theme="background"
        align="center"
      />

      <PostLayout className="mx-auto <md:px-5 text-base text-gray-700 md:text-lg md:leading-loose">
        <div
          className="gh-canvas article-body"
          dangerouslySetInnerHTML={{ __html: story.html }}
        />
      </PostLayout>
    </main>
  )
}

export async function getStaticPaths() {
  let { data } = await Storyblok.get('cdn/links/', {
    starts_with: 'posts',
  })

  let paths: any = []
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
      return
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug

    paths.push('/' + slug)
  })

  return {
    paths,
    fallback: false,
  }
}

/* TODO: fix this any! */
export async function getStaticProps({ params }: any) {
  const post = await api.posts
    .read({
      slug: params.slug,
    })
    .catch((err: any) => console.error(err))

  return {
    props: {
      story: post,
    },
  }
}

export default Post
