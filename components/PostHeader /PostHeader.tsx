import * as T from './PostHeader.types'
import styles from './postheader.module.css'

const PostHeader: React.FunctionComponent<T.IPostHeader> = ({
  title,
  description,
  theme,
}) => {
  const headerClass = `${styles.postHeader} ${
    theme === 'background' && styles.postHeaderBackground
  }`

  return (
    <div className={headerClass}>
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
