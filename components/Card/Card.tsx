import Image from 'next/image'
import styles from './card.module.css'

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

    return <Image src={cover} quality={100} alt={description} fill />
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
