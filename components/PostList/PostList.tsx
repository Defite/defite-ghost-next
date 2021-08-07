import PostItem from "../PostItem/PostItem";
import * as T from "./PostList.types";

const PostList: React.FunctionComponent<T.IPostList> = ({ items }) => {
    
    const renderList = () => {
        if (!items) {
            return null;
        }
        
        return items.map((item, index) => <PostItem {...item} key={`posts-${index}`} />)
    }

    return (
        <div className="-mx-5 mb-25">{renderList()}</div>
    )

}

export default PostList;
