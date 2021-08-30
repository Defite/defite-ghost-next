const PostLayout: React.FunctionComponent<any> = ({
  content,
  className,
  children,
}) => {
  return <article className={className}>{content ? content : children}</article>
}

export default PostLayout
