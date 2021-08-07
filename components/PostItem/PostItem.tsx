import Link from "next/link";
import * as T from "./PostItem.types";
import styles from "./postitem.module.css";

const PostItem: React.FunctionComponent<T.IPostItem> = ({ title, date, description, href, isFeatured }) => {
    return (
        <article className={styles.postItem}>
            <span>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
            </span>
            <span className={styles.date}>{date}</span>
            <Link href={href}><a className={styles.link}></a></Link>
        </article>
    )
}

export default PostItem;
