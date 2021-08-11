import MDX from '@mdx-js/runtime'
import Test from '../components/Test/Test'

const PostLayout: React.FunctionComponent<any> = ({ content, className }) => {
  const components = {
    Test,
  }

  return (
    <article className={className}>
      <MDX components={components}>{content}</MDX>
    </article>
  )
}

export default PostLayout
