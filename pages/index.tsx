import Intro from '../components/Intro/Intro'
import PostList from '../components/PostList/PostList'
import styles from './index.module.css'
import { getSortedPostsData } from '../lib/utils'
import Projects from '../components/Projects/Projects'

export default function Home({ posts, projects }: any) {
  return (
    <div className={styles.pageContainer}>
      <Intro />
      <div id="posts" className="-mt-5 mb-5 h-5 w-5"></div>
      <section>
        <h2 className={styles.sectionTitle}>Posts</h2>
        <PostList items={posts} />
      </section>
      <section>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <Projects projects={projects} />
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const posts = getSortedPostsData('posts').slice(0, 10)
  const projects = getSortedPostsData('projects')

  return {
    props: {
      posts,
      projects,
    },
  }
}
