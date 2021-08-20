import PostHeader from '../../components/PostHeader /PostHeader'
import PostList from '../../components/PostList/PostList'
import { getSortedPostsData } from '../../lib/utils'

const BlogIndex: React.FunctionComponent<any> = ({ allPostsData }) => {
  return (
    <div>
      <PostHeader title="Blog" />
      <div className="container mx-auto px-4 sm:px-16">
        <PostList items={allPostsData} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData('posts')
  return {
    props: {
      allPostsData,
    },
  }
}

export default BlogIndex
