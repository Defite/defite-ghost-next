import PostHeader from '../components/PostHeader /PostHeader'
import PostLayout from '../layouts/post'
import Head from 'next/dist/shared/lib/head'
import { api } from '../lib/ghost'
import { IPostItem } from '../components/PostList/PostList.types'

interface GhostJSTextNode {
  slug: string
  id: string
  uuid: string
  title: string
  html: string
  comment_id: string
  feature_image: string | null
  featured: boolean
  visibility: string
  created_at: string
  updated_at: string
  published_at: string
  custom_excerpt: string | null
  codeinjection_head: string | null
  codeinjection_foot: string | null
  custom_template: string | null
  canonical_url: string | null
  url: string
  excerpt: string
  reading_time: number
  access: boolean
  og_image: string | null
  og_title: string | null
  og_description: string | null
  twitter_image: string | null
  twitter_title: string | null
  twitter_description: string | null
  meta_title: string | null
  meta_description: string | null
  frontmatter: string | null
  feature_image_alt: string | null
  feature_image_caption: string | null
}

interface PageProps {
  story: GhostJSTextNode
}

const Page: React.FunctionComponent<PageProps> = ({ story }) => {
  const metaTags = {
    title: story.title || story.meta_title,
    description:
      story.custom_excerpt || story.meta_description || story.excerpt,
  }

  return (
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

      <PostLayout className="mx-auto text-lg text-gray-700 leading-9 md:leading-loose mt-14">
        <div
          className="gh-canvas article-body"
          dangerouslySetInnerHTML={{ __html: story.html }}
        />
      </PostLayout>
    </div>
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

  return {
    props: {
      story: page,
    },
  }
}

export default Page
