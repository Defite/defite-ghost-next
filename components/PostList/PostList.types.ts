export interface IPostItem {
  title: string
  custom_excerpt: string
  feature_image: string
  slug: string
}

export interface IPostList {
  items: IPostItem[]
}
