import { motion, AnimatePresence, useIsPresent } from 'framer-motion'
import { useRouter } from 'next/router'

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs
 */
const TransitionEffect = ({ children }) => {
  const { asPath } = useRouter()
  const isPresent = useIsPresent()

  return (
    <div className="effect-1">
      <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        {children}
        <motion.div
          key={asPath}
          initial={{ scaleX: 1 }}
          animate={{
            scaleX: 0,
            transition: { duration: 1, ease: 'backInOut' },
          }}
          exit={{ scaleX: 1, transition: { duration: 1, ease: 'backInOut' } }}
          style={{ originX: isPresent ? 0 : 1 }}
          className="privacy-screen"
        />
      </AnimatePresence>
    </div>
  )
}

export default TransitionEffect
