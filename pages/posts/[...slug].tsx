// import DynamicComponent from '../../components/DynamicComponent'
import Storyblok, { useStoryblok } from '../../lib/storyblok'
import PostHeader from '../../components/PostHeader /PostHeader'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import PostLayout from '../../layouts/post'

const Post: React.FunctionComponent<any> = ({ story, preview }) => {
  story = useStoryblok(story, preview)

  return (
    <div className="mb-10">
      <PostHeader
        title={story.content.title}
        description={render(story.content.description)}
        theme="background"
        align="center"
      />

      <PostLayout className="prose md:prose-lg mx-auto <md:px-5">
        {render(story.content.long_text)}
      </PostLayout>
    </div>
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
