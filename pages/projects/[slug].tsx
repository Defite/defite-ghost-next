import { getPostBySlug, getPostsByField } from '../../lib/utils'
import PostHeader from '../../components/PostHeader /PostHeader'
import PostLayout from '../../layouts/post'

const Post: React.FunctionComponent<any> = ({ project }) => {
  return (
    <div className="mb-10">
      <PostHeader title={project.title} description={project.description} />
      <PostLayout className="prose md:prose-lg mx-auto" {...project} />
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getPostsByField('projects', 'href')

  return {
    paths,
    fallback: false,
  }
}

/* TODO: fix this any! */
export async function getStaticProps({ params }: any) {
  const project = getPostBySlug('projects', params.slug, [
    'title',
    'date',
    'description',
    'content',
  ])

  return {
    props: {
      project,
    },
  }
}

export default Post
