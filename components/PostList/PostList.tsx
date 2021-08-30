import PostItem from '../PostItem/PostItem'
import * as T from './PostList.types'
import styles from './styles.module.css'
import { render } from 'storyblok-rich-text-react-renderer-ts'

const PostList: React.FunctionComponent<T.IPostList> = ({ items }) => {
  const renderList = () => {
    if (!items) {
      return null
    }

    return items.map((item, index) => (
      <PostItem
        title={item.content.title}
        description={render(item.content.description)}
        cover={item.content.cover.filename}
        href={item.full_slug}
        key={`posts-${index}`}
      />
    ))
  }

  return <div className={styles.grid}>{renderList()}</div>
}

export default PostList
