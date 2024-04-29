import cn from 'classnames'
import { IntroProps } from './Intro.types'
import styles from './intro.module.css'

const Intro: React.FunctionComponent<IntroProps> = ({ html }) => {
  return (
    <section className={styles.intro}>
      <div
        className={cn(styles.text, 'line')}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>

      <a href="#posts" className={cn(styles.introButton, 'actionButton')}>
        <span>Let&apos;s roll</span>
        <span className={`animate-bounce ${styles.introButtonIcon}`}>
          &#8595;
        </span>
      </a>
    </section>
  )
}

export default Intro
