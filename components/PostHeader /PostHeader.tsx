import Image from 'next/image'

import * as T from './PostHeader.types'
import styles from './postheader.module.css'

const PostHeader: React.FunctionComponent<T.IPostHeader> = ({
  data,
  theme,
  align,
}) => {
  const {
    title,
    custom_excerpt,
    feature_image,
    feature_image_caption,
    feature_image_alt,
  } = data

  const headerClass = `gh-canvas ${styles.postHeader}`

  return (
    <div className={headerClass}>
      <div className={styles.postHeaderInner}>
        <span className={styles.postHeaderMeta}>
          <time dateTime="2022-06-06">6 Jun 2022</time>{' '}
          <span className="bull">•</span> 3 min read
        </span>
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
