import PostHeader from '../../components/PostHeader /PostHeader'
import PostLayout from '../../layouts/post'
import { api } from '../../lib/ghost'
import Head from 'next/head'
import { IPostItem } from '../../components/PostList/PostList.types'
import { Header } from '../../components/Header'
import { useEffect } from 'react'
import type { Post } from '../../types/post'
import { NavItem } from '../../components/Nav/Nav.types'

interface PostProps {
  story: Post
  navigation: NavItem[]
  settings: {
    accent_color: string
  }
}

interface GetStaticPropsParams {
  params: {
    slug: string
  }
}

interface PostItem {
  pagination?: Record<string, number | null>
}

const Post: React.FunctionComponent<PostProps> = ({
  story,
  navigation,
  settings,
}) => {
  const metaTags = {
    title: story.title || story.meta_title,
    description: story.custom_excerpt || story.meta_description,
  }

  const defaultShareImage = 'https://nikita.codes/share.png'

  useEffect(() => {
    const highlight = async () => {
      const Prism = await import('prismjs')

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await import('prismjs/plugins/toolbar/prism-toolbar')

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await import('prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard')
      Prism.highlightAll()
    }

    highlight()
  })

  return (
    <>
      <style global jsx>{`
        :root {
          --ghost-accent-color: ${settings.accent_color};
        }
      `}</style>

      <Header items={navigation} />
      <main className="mb-10 gh-article">
        <Head>
          <title>{metaTags.title} – Nikita Codes</title>
          <meta
            name="description"
            content={metaTags.description || undefined}
          />

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
        <PostHeader data={story} />

        <PostLayout className="mx-auto text-lg text-gray-700 leading-9 md:leading-loose mt-14">
          <div
            className="gh-canvas article-body"
            dangerouslySetInnerHTML={{ __html: story.html }}
          />
        </PostLayout>
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const postsData = await api.posts
    .browse({
      limit: 'all',
    })
    .catch((err: Error) => console.error(err))

  const posts = postsData.filter((item: PostItem) => !item.pagination)

  const paths = posts.map((item: IPostItem) => `/posts/${item.slug}`)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: GetStaticPropsParams) {
  const post = await api.posts
    .read({
      slug: params.slug,
    })
    .catch((err: Error) => console.error(err))

  const settings = await api.settings.browse()

  return {
    props: {
      story: post,
      navigation: settings.navigation,
      settings,
    },
  }
}

export default Post
