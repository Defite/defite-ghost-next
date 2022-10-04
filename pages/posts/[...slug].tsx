import PostHeader from '../../components/PostHeader /PostHeader'
import PostLayout from '../../layouts/post'
import { api } from '../../lib/ghost'
import Head from 'next/head'
import { IPostItem } from '../../components/PostList/PostList.types'
import { Header } from '../../components/Header'
import { useEffect } from 'react'

const Post: React.FunctionComponent<any> = ({
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

      // @ts-ignore
      await import('prismjs/plugins/toolbar/prism-toolbar')
      // @ts-ignore
      await import('prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard')
      Prism.highlightAll()
    }

    highlight()
  })

  useEffect(() => {
    const handleToggleClick = (event: any) => {
      const parent = event.target.closest('.kg-toggle-card')

      parent?.getAttribute('data-kg-toggle-state') === 'close'
        ? parent.setAttribute('data-kg-toggle-state', 'open')
        : parent?.setAttribute('data-kg-toggle-state', 'close')
    }
    const content = document.querySelector('.article-body')
    content?.addEventListener('click', handleToggleClick)

    return () => {
      content?.removeEventListener('click', handleToggleClick)
    }
  }, [])

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
    .catch((err: any) => console.error(err))

  const posts = postsData.filter((item: any) => !item.pagination)

  const paths = posts.map((item: IPostItem) => `/posts/${item.slug}`)

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
