import * as T from './PostHeader.types'
import styles from './postheader.module.css'

const PostHeader: React.FunctionComponent<T.IPostHeader> = ({
  title,
  description,
}) => {
  return (
    <div className={styles.postHeader}>
      {/* <div className={styles.postHeaderInner}> */}
      <h1 className={styles.postHeaderTitle}>{title}</h1>
      {description && (
        <div className={styles.postHeaderDescription}>{description}</div>
      )}
      {/* </div> */}
    </div>
  )
}

export default PostHeader
