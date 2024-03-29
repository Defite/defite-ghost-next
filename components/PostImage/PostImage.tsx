import Image from 'next/image'
import { FunctionComponent } from 'react'
import { IPostImage } from './PostImage.types'
import styles from './styles.module.css'

const PostImage: FunctionComponent<IPostImage> = ({ src, title, caption }) => {
  if (!src) {
    return null
  }

  const [width, height] = src.split('/')[5].split('x')

  return (
    <figure className={styles.postImageWrap}>
      <div className={styles.postImage}>
        <Image
          src={src}
          width={parseInt(width, 10)}
          height={parseInt(height, 10)}
          alt={title}
        />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export default PostImage
