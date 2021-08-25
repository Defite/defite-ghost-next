import PostHeader from '../components/PostHeader /PostHeader'
import PostLayout from '../layouts/post'

const AboutPage: React.FunctionComponent = () => {
  return (
    <div className="mb-10">
      <PostHeader
        title="About me"
        description="A few words about me and this web page"
        theme="background"
      />
      <PostLayout className="prose md:prose-lg mx-auto <md:px-5">
        Hey again! You probably already know who I am?
      </PostLayout>
    </div>
  )
}

export default AboutPage
