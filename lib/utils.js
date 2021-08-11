import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function getPosts(type) {
  const postsDirectory = path.join(process.cwd(), `content/${type}`)

  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  
  return fileNames.map(fileName => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      href: `/${type}/${id}`,
      ...matterResult.data
    }
  })
}

/**
 * Get posts, sorted by date
 * @param { string } type - 'blog' or 'project'
 * @returns 
 */
export function getSortedPostsData(type) {
  const posts = getPosts(type);

  // Sort posts by date
  return posts.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export function getPostsByField(type, field) {
  const posts = getPosts(type);
  
  return posts.map(item => item[field]);
}

/**
 * Gets post data
 * @param { strin } project - 'posts' or 'projects'
 * @param { string } slug
 * @param { array } fields - get needed fields from post
 * @returns 
 */
export function getPostBySlug(type, slug, fields = []) {
    const postsDirectory = path.join(process.cwd(), `content/${type}`)
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
  
    const items = {};
  
    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
      if (field === 'slug') {
        items[field] = realSlug;
      }
      if (field === 'content') {
        items[field] = content;
      }
  
      if (data[field]) {
        items[field] = data[field];
      }
    });
  
    return items;
}
