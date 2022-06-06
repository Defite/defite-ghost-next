import PostHeader from '../../components/PostHeader /PostHeader'
import PostList from '../../components/PostList/PostList'
import Storyblok, { useStoryblok } from '../../lib/storyblok'
import Head from 'next/dist/shared/lib/head'

const BlogIndex: React.FunctionComponent<any> = ({ posts, preview }) => {
  posts = useStoryblok(posts, preview)

  return (
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
      <PostHeader title="Blog" theme="simple" align="center" />
      <div className="container mx-auto px-4 sm:px-16">
        <PostList items={posts.stories} />
      </div>
    </main>
  )
}

export async function getStaticProps(context: any) {
  let params = {
    version: 'draft', // or 'published'
    cv: Date.now(),
  }

  if (context.preview) {
    params.version = 'draft'
    params.cv = Date.now()
  }

  let { data } = await Storyblok.get(`cdn/stories/home`, {})

  let { data: posts } = await Storyblok.get(`cdn/stories`, {
    starts_with: 'posts',
    per_page: 10,
  })

  return {
    props: {
      posts,
      preview: context.preview || false,
    },
    revalidate: 3600, // revalidate every hour
  }
}

export default BlogIndex
