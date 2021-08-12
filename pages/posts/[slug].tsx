import { getPostBySlug, getPostsByField } from '../../lib/utils'
import PostHeader from '../../components/PostHeader /PostHeader'
import PostLayout from '../../layouts/post'
import * as T from './post.types'

const Post: React.FunctionComponent<T.IPostProps> = ({ post }) => {
  return (
    <div className="mb-10">
      <PostHeader title={post.title} description={post.description} />
      <PostLayout className="prose md:prose-lg mx-auto" {...post} />
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

  return {
    props: {
      post,
    },
  }
}

export default Post