import { getSortedPostsData } from '../../lib/posts';



const BlogIndex: React.FunctionComponent<any> = ({ allPostsData }) => {
    console.log(allPostsData)

    return <div>Blog Index</div>
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default BlogIndex;