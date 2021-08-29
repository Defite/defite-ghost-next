import PostList from '../components/PostList/PostList'
import styles from './index.module.css'
import Storyblok, { useStoryblok } from '../lib/storyblok'
import DynamicComponent from '../components/DynamicComponent'
// import Projects from '../components/Projects/Projects'

export default function Home({ posts, story, preview /*, projects*/ }: any) {
  story = useStoryblok(story, preview)

  return (
    <div className={styles.pageContainer}>
      <DynamicComponent blok={story.content} />
      <div id="posts" className="-mt-5 mb-5 h-5 w-5"></div>
      <section className="px-1.5rem lg:px-16">
        <h2 className={styles.sectionTitle}>Posts</h2>
        <PostList items={posts.stories} />
      </section>
      {/* <section className="px-1.5rem lg:px-16">
        <h2 className={styles.sectionTitle}>Projects</h2>
        <Projects projects={projects} />
      </section> */}
    </div>
  )
}

export async function getStaticProps(context: any) {
  let params = {
    version: 'draft', // or 'published'
    cv: Date.now(),
  }

  if (context.preview) {
    params.version = 'draft'
    params.cv = Date.now()
  }

  let { data } = await Storyblok.get(`cdn/stories/home`, {})

  let { data: posts } = await Storyblok.get(`cdn/stories`, {
    starts_with: 'posts',
    per_page: 10,
  })

  return {
    props: {
      posts,
      story: data ? data.story : false,
      preview: context.preview || false,
    },
    revalidate: 3600, // revalidate every hour
  }
}
