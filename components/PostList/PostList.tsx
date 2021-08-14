import PostItem from '../PostItem/PostItem'
import * as T from './PostList.types'
import styles from './styles.module.css'

const PostList: React.FunctionComponent<T.IPostList> = ({ items }) => {
  const renderList = () => {
    if (!items) {
      return null
    }

    return items.map((item, index) => (
      <PostItem {...item} key={`posts-${index}`} />
    ))
  }

  return <div className={styles.grid}>{renderList()}</div>
}

export default PostList
