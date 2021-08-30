import styles from './intro.module.css'
import { render } from 'storyblok-rich-text-react-renderer-ts'

const Intro: React.FunctionComponent<any> = ({ blok }) => {
  return (
    <section className={styles.intro}>
      <h1 className={styles.introTitle}>
        {render(blok.title)}
        {/* I&apos;m Nikita Makhov. <br /> I make modern websites. */}
      </h1>
      <h3 className={styles.introSub}>
        {render(blok.description)}
        {/* I&apos;m front-end developer in{' '}
        <a className={styles.link} href="https://mail.ru">
          Mail.ru
        </a>
        . Apart from this I&apos;m writing stuff in{' '}
        <a className={styles.link} href="https://webgrower.ru">
          Webgrower
        </a>
        , <i>magazine about web development.</i> You can catch me running or
        driving Volvo. */}
      </h3>

      <a href="#posts" className={styles.introButton}>
        <span>Let&apos;s roll</span>
        <span className={`animate-bounce ${styles.introButtonIcon}`}>
          &#8595;
        </span>
      </a>
    </section>
  )
}

export default Intro
