import PostList from '../components/PostList/PostList'
import Storyblok, { useStoryblok } from '../lib/storyblok'
import DynamicComponent from '../components/DynamicComponent'
import Head from 'next/dist/shared/lib/head'
// import Projects from '../components/Projects/Projects'

export default function Home({ posts, story, preview /*, projects*/ }: any) {
  story = useStoryblok(story, preview)

  return (
    <main className="container mx-auto">
      <Head>
        <meta property="og:image" content="https://nikita.codes/share.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://nikita.codes/share.png"
        />
      </Head>
      <DynamicComponent blok={story.content} />
      <section id="posts" className="-mt-5 mb-5 h-5 w-5"></section>
      <section className="px-1.5rem lg:px-16">
        <h2 className="text-4xl font-serif mb-2rem">Posts</h2>
        <PostList items={posts.stories} />
      </section>
      {/* <section className="px-1.5rem lg:px-16">
        <h2 className={styles.sectionTitle}>Projects</h2>
        <Projects projects={projects} />
      </section> */}
    </main>
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
