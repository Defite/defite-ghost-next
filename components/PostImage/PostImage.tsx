import Image from 'next/image'
import { FunctionComponent } from 'react'
import { IPostImage } from './PostImage.types'
import styles from './styles.module.css'

const PostImage: FunctionComponent<IPostImage> = ({ src, title }) => {
  return (
    <figure className={styles.postImageWrap}>
      <div className={styles.postImage}>
        <Image src={src} layout="fill" alt={title} />
      </div>
      {title && <figcaption>{title}</figcaption>}
    </figure>
  )
}

export default PostImage
