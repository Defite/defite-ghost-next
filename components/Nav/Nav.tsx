import { FunctionComponent } from 'react'
import Link from 'next/link'
import styles from './nav.module.css'

interface INav {
  opened: boolean
  setOpen: (opened: boolean) => void
}

const Nav: FunctionComponent<INav> = ({ opened, setOpen }) => {
  const navClass = opened
    ? 'duration-200 ease-out opacity-100 transform scale-100'
    : 'duration-200 ease-in opacity-0 transform scale-95'

  const onLinkClick = () => setOpen(false)

  return (
    <nav
      className={`${styles.nav} ${navClass} md:opacity-100 md:transform-none`}
    >
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/posts">
            <a onClick={onLinkClick}>Blog</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/projects">
            <a onClick={onLinkClick}>Projects</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">
            <a onClick={onLinkClick}>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
