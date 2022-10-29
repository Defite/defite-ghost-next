import Link from 'next/link'
import Image from 'next/image'
import * as T from './PostItem.types'
import styles from './postitem.module.css'

const PostItem: React.FunctionComponent<T.IPostItem> = ({
  title,
  description,
  href,
  cover,
}) => {
  /**
   * Renders cover if exists
   */
  const renderCover = () => {
    if (!cover) {
      return null
    }

    return (
      <Image
        className={styles.image}
        src={cover}
        alt=""
        sizes="33vw"
        quality={80}
        fill
      />
    )
  }

  return (
    <article className={styles.postItem}>
      {renderCover()}
      <div className={styles.postItemInner}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.description}>{description}</div>
        <Link href={href} scroll={false} className={styles.link} />
      </div>
    </article>
  )
}

export default PostItem
