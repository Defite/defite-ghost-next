import Link from 'next/link'
import styles from './nav.module.css'

const Nav: React.FunctionComponent = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/posts">
            <a>Blog</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
