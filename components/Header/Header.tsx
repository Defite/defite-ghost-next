import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav"
import styles from './header.module.css'

const Header:React.FunctionComponent = () => {
    return (
        <header className={styles.header}>
            <Logo name="Defite" avatar="/avatar.jpg" />
            <Nav />
        </header>
    )
}

export default Header;
