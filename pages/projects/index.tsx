import PostHeader from "../../components/PostHeader /PostHeader"
import Projects from "../../components/Projects/Projects"
import { getSortedPostsData } from "../../lib/utils"

const ProjectsIndex: React.FunctionComponent = ({ projects }) => {
    return (
        <div>
            <PostHeader title="Projects" />
            <div className="container mx-auto px-16">
                <Projects projects={projects} />
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const projects = getSortedPostsData('projects')
    return {
        props: {
            projects
        }
    }
}

export default ProjectsIndex;