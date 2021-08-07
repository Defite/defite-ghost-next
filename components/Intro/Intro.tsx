import styles from './intro.module.css'

const Intro: React.FunctionComponent = () => {
    return (
        <section className={styles.intro}>
          <h1 className={styles.introTitle}>I'm Nikita Makhov. <br /> I make modern websites.</h1>
          <h3 className={styles.introSub}>I'm front-end developer in <a href="https://mail.ru">Mail.ru</a>. Apart from this I'm writing stuff in <a href="https://webgrower">Webgrower</a>, magazine about web development. You can catch me running or driving Volvo.</h3>
        </section>
    )
}

export default Intro;
