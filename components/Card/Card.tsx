import Image from 'next/image'
import Link from 'next/link';
import styles from './card.module.css'

interface ICardProps {
    title: string;
    url: string;
    description: string;
    cover?: any; // Because fuck you, StaticImport, that's why
}

const Card: React.FunctionComponent<ICardProps> = ({ title, url, description, cover }) => {
    const renderCover = () => {
        if (!cover) {
            return null;
        }

        return <Image src={cover} layout="fill" objectFit="cover" quality={100} objectPosition="top" />
    }

    return (
        <div className={styles.card}>
            {renderCover()}
            <div className={styles.cardContent}>
                {/* <div className={styles.cardContentInner}> */}
                    <h2 className={styles.cardTitle}>{title}</h2>
                    <p className={styles.cardDescription}>{description}</p>
                {/* </div> */}
            </div>
            <Link href={url}><a className={styles.cardLink}></a></Link>
        </div>
    )
}

export default Card;