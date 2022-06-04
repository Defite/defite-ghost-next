interface PostLayoutProps {
  children: React.ReactNode
  className: string
  content?: React.ReactNode
}

const PostLayout: React.FunctionComponent<PostLayoutProps> = ({
  content,
  className,
  children,
}) => {
  return <article className={className}>{content ? content : children}</article>
}

export default PostLayout
