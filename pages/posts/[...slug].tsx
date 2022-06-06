import Storyblok, { useStoryblok } from '../../lib/storyblok'
import PostHeader from '../../components/PostHeader /PostHeader'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import PostLayout from '../../layouts/post'
import PostImage from '../../components/PostImage/PostImage'
import Head from 'next/head'

const Post: React.FunctionComponent<any> = ({ story, preview }) => {
  story = useStoryblok(story, preview)

  const { metadata } = story.content
  const metaTags = metadata || {
    title: story.content.title,
    description: '',
  }

  const defaultShareImage = 'https://nikita.codes/share.png'

  return (
    <main className="mb-10">
      <Head>
        <title>{metaTags.title} – Nikita Codes</title>
        <meta name="description" content={metaTags.description} />

        <meta
          property="og:image"
          content={(metadata && metadata.og_image) || defaultShareImage}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content={(metadata && metadata.twitter_image) || defaultShareImage}
        />
      </Head>
      <PostHeader
        title={story.content.title}
        description={render(story.content.description)}
        theme="background"
        align="center"
      />

      <PostLayout className="prose md:prose-lg mx-auto <md:px-5">
        {render(story.content.long_text, {
          blokResolvers: {
            // eslint-disable-next-line react/display-name
            ['NextPicture']: (props) => (
              <PostImage
                src={props.image.filename}
                title={props.title}
                caption={props.image.name}
              />
            ),
            ['youtube']: (props) => {
              return <div dangerouslySetInnerHTML={{ __html: props.video }} />
            },
          },
        })}
      </PostLayout>
    </main>
  )
}

export async function getStaticPaths() {
  let { data } = await Storyblok.get('cdn/links/', {
    starts_with: 'posts',
  })

  let paths: any = []
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
      return
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug

    paths.push('/' + slug)
  })

  return {
    paths,
    fallback: false,
  }
}

/* TODO: fix this any! */
export async function getStaticProps({ params, preview = false }: any) {
  let sbParams = {
    version: 'draft', // or published
    cv: Date.now(),
  }

  if (preview) {
    sbParams.version = 'draft'
    sbParams.cv = Date.now()
  }

  let { data } = await Storyblok.get(
    `cdn/stories/posts/${params.slug}`,
    sbParams
  )

  return {
    props: {
      story: data ? data.story : null,
      preview,
    },
    revalidate: 3600,
  }
}

export default Post
