import { FunctionComponent, useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './nav.module.css'
import { NavProps } from './Nav.types'

const Nav: FunctionComponent<NavProps> = ({ opened, setOpen, items }) => {
  const navClass = opened
    ? 'duration-200 ease-out opacity-100 transform scale-100 z-10'
    : 'duration-200 ease-in opacity-0 transform scale-95 <md:-z-10'

  const navRef = useRef<HTMLElement>(null)

  const onLinkClick = () => setTimeout(() => setOpen(false), 500)

  useEffect(() => {
    let timer: null | ReturnType<typeof setTimeout> = null

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
        {items.map((item) => (
          <li className={styles.navItem} key={`menu-nav-${item.label}`}>
            <Link href={item.url} onClick={onLinkClick}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
