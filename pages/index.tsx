import Card from '../components/Card/Card';
import Intro from '../components/Intro/Intro';
import PostList from '../components/PostList/PostList';
import styles from './index.module.css';
import { getSortedPostsData } from '../lib/posts';

export default function Home({allPostsData}: any) {
  return (
    <main>
      <Intro />
      <section>
        <h2 className={styles.sectionTitle}>Posts</h2>
        <PostList items={allPostsData} />
      </section>
      <section>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div>
          <Card
            title="Webgrower"
            description="Almost everyday magazine about web development"
            url="https://webgrower.ru"
            cover="/projects/webgrower.png"
          />

          <Card
            title="My awesome project"
            description="Project about something meaningful in my life"
            url="https://webgrower.ru"
          />
        </div>
      </section>
    </main>
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

