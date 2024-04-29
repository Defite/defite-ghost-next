import PostList from '../components/PostList/PostList'
import { api } from '../lib/ghost'
import Head from 'next/dist/shared/lib/head'
import { Intro } from '../components/Intro'
import { Header } from '../components/Header'
import { IPostItem } from '../components/PostList/PostList.types'
import { NavItem } from '../components/Nav/Nav.types'
import { PageTitle } from '../components/PageTitle'
import Link from 'next/link'
// import Projects from '../components/Projects/Projects'

interface PostsDataItem {
  pagination?: Record<string, number | null>
}

interface HomePageProps {
  posts: IPostItem[]
  page: {
    html: string
  }
  navigation: NavItem[]
}

export default function Home({
  posts,
  page,
  navigation /*, projects*/,
}: HomePageProps) {
  return (
    <>
      <Header items={navigation} />
      <main className="container mx-auto">
        <Head>
          <meta property="og:image" content="https://nikita.codes/share.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:image"
            content="https://nikita.codes/share.png"
          />
        </Head>

        <Intro {...page} />

        <section id="posts" className="-mt-5 mb-5 h-5 w-5"></section>
        <section className="posts px-1.5rem">
          <PageTitle title="Latest posts" type="secondary" />

          <PostList items={posts} />
        </section>
        {/* <section className="px-1.5rem lg:px-16">
          <h2 className={styles.sectionTitle}>Projects</h2>
          <Projects projects={projects} />
        </section> */}
      </main>
    </>
  )
}

export async function getStaticProps() {
  const postsData = await api.posts
    .browse({
      limit: 'all',
    })
    .catch((err: Error) => console.error(err))

  const posts = postsData.filter((item: PostsDataItem) => !item.pagination)

  const page = await api.pages
    .read({
      slug: 'home',
    })
    .catch((err: Error) => console.error(err))

  const settings = await api.settings.browse()

  return {
    props: {
      posts,
      page,
      navigation: settings.navigation,
    },
  }
}
