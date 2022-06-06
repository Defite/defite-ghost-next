import styles from './styles.module.css'

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto">
        <div className={styles.footerLeft}>
          &copy; {new Date().getFullYear()} Defite. This site was made with{' '}
          <a className={styles.footerLink} href="https://nextjs.org/">
            Next.js
          </a>
          ,{' '}
          <a className={styles.footerLink} href="https://windicss.org/">
            Windi CSS
          </a>{' '}
          &{' '}
          <a className={styles.footerLink} href="https://vercel.com/">
            deployed via Vercel
          </a>
          .
        </div>
      </div>
    </footer>
  )
}

export default Footer
