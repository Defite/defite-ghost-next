import Image from 'next/image'
import styles from './card.module.css'

interface ICardProps {
  title: string
  description: string
  cover?: string
  className?: string
}

const Card: React.FunctionComponent<ICardProps> = ({
  className,
  title,
  description,
  cover,
}) => {
  const renderCover = () => {
    if (!cover) {
      return null
    }

    return (
      <Image
        src={cover}
        layout="fill"
        objectFit="cover"
        quality={100}
        objectPosition="top"
        alt={description}
      />
    )
  }

  return (
    <div className={className}>
      <div className={styles.card}>
        {renderCover()}
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
