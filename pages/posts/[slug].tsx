import { getPostBySlug, getPostsByField } from '../../lib/utils'
import Storyblok from '../../lib/storyblok'
import PostHeader from '../../components/PostHeader /PostHeader'
import PostLayout from '../../layouts/post'

export interface IPostProps {
  post: {
    title: string
    date: string
    description?: string
    content: string
  }
}

const Post: React.FunctionComponent<IPostProps> = ({ post }) => {
  return (
    <div className="mb-10">
      <PostHeader
        title={post.title}
        description={post.description}
        theme="background"
      />
      <PostLayout className="prose md:prose-lg mx-auto <md:px-5" {...post} />
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getPostsByField('posts', 'href')

  return {
    paths,
    fallback: false,
  }
}

/* TODO: fix this any! */
export async function getStaticProps({ params }: any) {
  const post = getPostBySlug('posts', params.slug, [
    'title',
    'date',
    'description',
    'content',
  ])

  let { data } = await Storyblok.get(`cdn/stories/posts/${params.slug}`, {})

  console.log('my post aka story', data.story)

  return {
    props: {
      post,
    },
  }
}

export default Post
