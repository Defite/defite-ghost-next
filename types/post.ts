import { BaseNode } from './base'

export type Post = Pick<
  BaseNode,
  | 'title'
  | 'custom_excerpt'
  | 'feature_image'
  | 'feature_image_alt'
  | 'feature_image_caption'
  | 'reading_time'
  | 'published_at'
  | 'og_image'
  | 'twitter_image'
  | 'html'
  | 'meta_description'
  | 'meta_title'
>
