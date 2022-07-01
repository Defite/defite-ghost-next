import PostHeader from '../../components/PostHeader /PostHeader'
import PostList from '../../components/PostList/PostList'
import Head from 'next/dist/shared/lib/head'
import { api } from '../../lib/ghost'
import { Header } from '../../components/Header'

const BlogIndex: React.FunctionComponent<any> = ({
  story,
  posts,
  navigation,
}) => {
  return (
    <>
      <Header items={navigation} />
      <main>
        <Head>
          <title>Blog – Nikita Codes</title>
          <meta name="description" content="List of all my posts" />

          <meta property="og:image" content="https://nikita.codes/share.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:image"
            content="https://nikita.codes/share.png"
          />
        </Head>
        <PostHeader data={story} alignCenter isPage />
        <div className="container mx-auto px-4 sm:px-16">
          <PostList items={posts} />
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const page = await api.pages
    .read({
      slug: 'blog',
    })
    .catch((err: any) => console.error(err))

  const postsData = await api.posts
    .browse({
      limit: 'all',
    })
    .catch((err: any) => console.error(err))

  const posts = postsData.filter((item: any) => !item.pagination)

  const settings = await api.settings.browse()

  return {
    props: {
      story: page,
      posts,
      navigation: settings.navigation,
    },
  }
}

export default BlogIndex
