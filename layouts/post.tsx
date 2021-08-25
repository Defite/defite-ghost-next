import MDX from '@mdx-js/runtime'
import Test from '../components/Test/Test'

const PostLayout: React.FunctionComponent<any> = ({
  content,
  className,
  children,
}) => {
  const components = {
    Test,
  }

  return (
    <article className={className}>
      <MDX components={components}>{content ? content : children}</MDX>
    </article>
  )
}

export default PostLayout
