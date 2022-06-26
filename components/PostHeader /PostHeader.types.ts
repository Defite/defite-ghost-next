import { Post } from '../../types/post'
export interface IPostHeader {
  data: Post
  theme: 'simple' | 'background'
  align?: 'center'
}
