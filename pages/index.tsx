import Intro from '../components/Intro/Intro';
import PostList from '../components/PostList/PostList';
import styles from './index.module.css';
import { getSortedPostsData } from '../lib/posts';
import Projects from '../components/Projects/Projects';

const mockProjects = [
  {
    title: 'Webgrower',
    description: 'Almost everyday magazine about web development',
    cover: '/projects/webgrower.png',
    url: 'https://webgrower.ru'
  },
  {
    title: 'My awesome project',
    description: 'Project about something meaningful in my life',
    url: '#'
  },
]

export default function Home({allPostsData}: any) {
  return (
    <div className="container mx-auto px-16">
      <Intro />
      <section>
        <h2 className={styles.sectionTitle}>Posts</h2>
        <PostList items={allPostsData} />
      </section>
      <section>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <Projects projects={mockProjects} />
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData().slice(0, 10);
  return {
      props: {
          allPostsData
      }
  }
}

