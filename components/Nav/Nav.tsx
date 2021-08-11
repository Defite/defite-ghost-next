import Link from "next/link"
import styles from './nav.module.css'

const Nav: React.FunctionComponent = () => {
    return (
        <nav>
            <ul className={styles.navList}>
                <li><Link href="/posts"><a className={styles.navItem}>Blog</a></Link></li>
                <li><Link href="/projects"><a className={styles.navItem}>Projects</a></Link></li>
                <li><Link href="/about"><a className={styles.navItem}>About</a></Link></li>
            </ul>
        </nav>
    )
}

export default Nav;
