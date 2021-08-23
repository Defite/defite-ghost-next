import { useEffect, FunctionComponent } from 'react'
import BurgerIcon from '../../assets/icons/burger.svg'
import CloseIcon from '../../assets/icons/close.svg'
import styles from './burger.module.css'

interface IBurger {
  opened: boolean
  setOpen: (opened: boolean) => void
}

const Burger: FunctionComponent<IBurger> = ({ opened, setOpen }) => {
  const handleClick = () => {
    setOpen(!opened)
  }

  useEffect(() => {
    document.querySelector('body')?.classList.toggle('freeze', opened)
  }, [opened])

  return (
    <button
      id="burger-btn"
      className={`burger-btn ${styles.btn}`}
      onClick={handleClick}
    >
      {!opened ? (
        <BurgerIcon className={`burger ${styles.btnIcon} w-6 h-6`} />
      ) : (
        <CloseIcon className={`close ${styles.btnIcon} w-6 h-6`} />
      )}
    </button>
  )
}

export default Burger
