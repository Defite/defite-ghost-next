import PostHeader from '../components/PostHeader /PostHeader'
import PostLayout from '../layouts/post'
import Head from 'next/dist/shared/lib/head'
import { api } from '../lib/ghost'
import { IPostItem } from '../components/PostList/PostList.types'
import { Header } from '../components/Header'
import { NavItem } from '../components/Nav/Nav.types'
import { BaseNode } from '../types/base'

interface PageProps {
  story: BaseNode
  navigation: NavItem[]
}

const Page: React.FunctionComponent<PageProps> = ({ story, navigation }) => {
  const metaTags = {
    title: story.title || story.meta_title,
    description:
      story.custom_excerpt || story.meta_description || story.excerpt,
  }

  return (
    <>
      <Header items={navigation} />
      <div className="mb-10">
        <Head>
          <title>{metaTags.title} – Nikita Codes</title>
          <meta name="description" content={metaTags.description} />
          <meta property="og:image" content="https://nikita.codes/share.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:image"
            content="https://nikita.codes/share.png"
          />
        </Head>

        <PostHeader data={story} isPage />

        <PostLayout className="mx-auto text-lg text-gray-700 leading-9 md:leading-loose mt-14">
          <div
            className="gh-canvas article-body"
            dangerouslySetInnerHTML={{ __html: story.html }}
          />
        </PostLayout>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const pagesData = await api.pages
    .browse({
      limit: 'all',
    })
    .catch((err: any) => console.error(err))

  const pages = pagesData.filter((item: any) => !item.pagination)

  const paths = pages.map((item: IPostItem) => `/${item.slug}`)

  return {
    paths,
    fallback: false,
  }
}

/* TODO: fix this any! */
export async function getStaticProps({ params }: any) {
  const page = await api.pages
    .read({
      slug: params.page,
    })
    .catch((err: any) => console.error(err))

  const settings = await api.settings.browse()

  return {
    props: {
      story: page,
      navigation: settings.navigation,
    },
  }
}

export default Page
