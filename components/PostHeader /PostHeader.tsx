import Image from 'next/image'
import cx from 'classnames'

import * as T from './PostHeader.types'
import styles from './postheader.module.css'

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

  const rootClass = cx('gh-canvas', styles.postHeader, {
    [styles.postHeaderNoBg]: !feature_image,
    [styles.postHeaderAlignCenter]: alignCenter,
  })

  return (
    <div className={rootClass}>
      <div className={styles.postHeaderInner}>
        {!isPage && (
          <span className={styles.postHeaderMeta}>
            <time dateTime="2022-06-06">6 Jun 2022</time>{' '}
            <span className="bull">•</span> 3 min read
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
