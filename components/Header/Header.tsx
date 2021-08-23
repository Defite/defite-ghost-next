import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import Nav from '../Nav'
import Burger from '../Burger/Burger'
import styles from './header.module.css'

const Header: React.FunctionComponent = () => {
  const [opened, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <Logo name="Defite" avatar="/avatar.jpg" />
      <Nav opened={opened} setOpen={setOpen} />
      <Burger opened={opened} setOpen={setOpen} />
    </header>
  )
}

export default Header
