import styles from './intro.module.css'

const Intro: React.FunctionComponent<any> = (props) => {
  const { html } = props

  return (
    <section className={styles.intro}>
      <div
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
      {/* <h1 className={styles.introTitle}> */}
      {/* I&apos;m Nikita Makhov. <br /> I make modern websites. */}
      {/* </h1>
      <h3 className={styles.introSub}> */}
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
      {/* </h3> */}

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
