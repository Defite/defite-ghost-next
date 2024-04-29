import * as T from './Logo.types'
import styles from './logo.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Logo: React.FunctionComponent<T.ILogo> = ({ avatar, onClick }) => {
  return (
    <Link href="/" className={styles.logo} onClick={onClick}>
      {avatar && (
        <span className={styles.avatar}>
          <Image
            src={avatar}
            width="40"
            height="40"
            alt={'avatar'}
            priority={true}
          />
        </span>
      )}
    </Link>
  )
}

export default Logo
