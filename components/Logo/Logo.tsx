import * as T from './Logo.types';
import styles from './logo.module.css'
import Link from 'next/link';
import Image from 'next/image';

const Logo:React.FunctionComponent<T.ILogo> = ({ name, avatar }) => {
    return (
        <Link href="/">
            <a className={styles.logo}>
                {avatar && <span className={styles.avatar}><Image src={avatar} width="40" height="40" alt={name} /></span>}
                <span className={styles.logoText}>{name}</span>
            </a>
        </Link>
    )
}

export default Logo;