import Image from 'next/image'
import cx from 'classnames'

import * as T from './PostHeader.types'
import styles from './postheader.module.css'
import { usePostMeta } from './PostHeader.utils'

const PostHeader: React.FunctionComponent<T.IPostHeader> = ({
  data,
  alignCenter,
  isPage,
}) => {
  const {
    title,
    custom_excerpt,
    feature_image,
    feature_image_caption,
    feature_image_alt,
  } = data

  const { date, reading_time, dateTime } = usePostMeta(data)

  const rootClass = cx('gh-canvas', styles.postHeader, {
    [styles.postHeaderNoBg]: !feature_image,
    [styles.postHeaderAlignCenter]: alignCenter,
  })

  return (
    <div className={rootClass}>
      <div className={styles.postHeaderInner}>
        {!isPage && (
          <span className={styles.postHeaderMeta}>
            <time dateTime={dateTime}>{date}</time>{' '}
            <span className="bull">•</span> {reading_time} min read
          </span>
        )}
        <h1 className={styles.postHeaderTitle}>{title}</h1>
        <p className={styles.postHeaderDescription}>{custom_excerpt}</p>
      </div>

      {feature_image && (
        <figure className={styles.postHeaderFeatureImage}>
          <Image
            src={feature_image}
            alt={feature_image_alt || ''}
            layout="fill"
          />
          <figcaption className={styles.postHeaderFeatureImageFigcaption}>
            {feature_image_caption && (
              <div
                dangerouslySetInnerHTML={{ __html: feature_image_caption }}
              />
            )}
          </figcaption>
        </figure>
      )}
    </div>
  )
}

export default PostHeader
