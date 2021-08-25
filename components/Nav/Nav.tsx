import { FunctionComponent, useEffect, useRef } from 'react'
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

  const navRef = useRef<HTMLElement>(null)

  const onLinkClick = () => setTimeout(() => setOpen(false), 500)

  useEffect(() => {
    let timer: any = null

    const nav = navRef.current

    window.addEventListener('resize', function () {
      if (timer) {
        clearTimeout(timer)
        timer = null
      } else {
        nav?.classList.add('transition-none')
      }
      timer = setTimeout(() => {
        nav?.classList.remove('transition-none')
        timer = null
      }, 100)
    })

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <nav
      ref={navRef}
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
